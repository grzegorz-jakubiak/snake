import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  DIRECTION_DOWN
} from 'consts/directions'

class Snake {
  constructor (params = {}) {
    this.boardSize = params.boardSize
    this.points = this.initializePoints(this.boardSize)
    this.direction = params.direction || DIRECTION_RIGHT
  }

  initializePoints (boardSize) {
    const headX = Math.round(boardSize / 2) - 1
    const headY = headX
    const initialSize = 3

    return new Array(initialSize).fill(0).map((_, index) => {
      return {
        x: headX - index,
        y: headY
      }
    })
  }

  eatApple () {
    const { x, y } = this.tail()
    this.points.push({
      x: x,
      y: y
    })
  }  

  head () {
    return this.points[0]
  }

  tail () {
    const lastIndex = this.points.length - 1
    return this.points[lastIndex]
  }

  move () {
    for (let index = this.points.length - 1; index > 0; index--) {
      this.points[index] = this.points[index - 1]
    }

    const currentHead = this.points[0]

    switch (this.direction) {
      case DIRECTION_LEFT:
        this.points[0] = {
          x: currentHead.x - 1,
          y: currentHead.y
        }
        break
      case DIRECTION_RIGHT:
        this.points[0] = {
          x: currentHead.x + 1,
          y: currentHead.y
        }
        break
      case DIRECTION_UP:
        this.points[0] = {
          x: currentHead.x,
          y: currentHead.y - 1
        }
        break
      case DIRECTION_DOWN:
        this.points[0] = {
          x: currentHead.x,
          y: currentHead.y + 1
        }
        break
    }
  }

  didCollidedWithItSelf () {
    let collided = false

    for (let index = this.points.length - 1; index > 0; index--) {
      const currentElement = this.points[index]
      if (this.points.length > 4 && this.head().x === currentElement.x && this.head().y === currentElement.y) {
        collided = true
        break
      }
    }

    return collided
  }

  canMove () {
    let nextX, nextY
    const head = this.head()

    if (this.didCollidedWithItSelf()) {
      return false
    }

    switch (this.direction) {
      case DIRECTION_LEFT:
        nextX = head.x - 1
        return this.areCoordinatesInBoundries(nextX)
      case DIRECTION_RIGHT:
        nextX = head.x + 1
        return this.areCoordinatesInBoundries(nextX)
      case DIRECTION_UP:
        nextY = head.y - 1
        return this.areCoordinatesInBoundries(nextY)
      case DIRECTION_DOWN:
        nextY = head.y + 1
        return this.areCoordinatesInBoundries(nextY)
    }
  }

  areCoordinatesInBoundries (coordinate) {
    const minCoordinate = 0
    const maxCoordinate = this.boardSize - 1
    return minCoordinate <= coordinate && coordinate <= maxCoordinate
  }

  changeDirection (direction) {
    switch (this.direction) {
      case DIRECTION_LEFT:
      case DIRECTION_RIGHT:
        if ([DIRECTION_UP, DIRECTION_DOWN].includes(direction)) {
          this.direction = direction
        }
        break
      case DIRECTION_UP:
      case DIRECTION_DOWN:
        if ([DIRECTION_LEFT, DIRECTION_RIGHT].includes(direction)) {
          this.direction = direction
        }
        break
    }
  }
}

export default Snake
