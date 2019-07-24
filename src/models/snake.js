import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  DIRECTION_DOWN
} from 'consts/directions'

class Snake {
  constructor (params = {}) {
    this.size = 3
    this.boardSize = params.boardSize
    this.points = this.initializePoints(this.boardSize)
    this.direction = params.direction || DIRECTION_RIGHT
  }

  initializePoints (boardSize) {
    const headX = boardSize / 2 - 1
    const headY = headX

    return new Array(this.size).fill(0).map((_, index) => {
      return {
        x: headX - index,
        y: headY
      }
    })
  }

  grow () {
    this.size += 1
  }

  head () {
    return this.points[0]
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

  canMove () {
    let nextX, nextY
    switch (this.direction) {
      case DIRECTION_LEFT:
        nextX = this.points[0].x - 1
        return this.areCoordinatesInBoundries(nextX)
      case DIRECTION_RIGHT:
        nextX = this.points[0].x + 1
        return this.areCoordinatesInBoundries(nextX)
      case DIRECTION_UP:
        nextY = this.points[0].y - 1
        return this.areCoordinatesInBoundries(nextY)
      case DIRECTION_DOWN:
        nextY = this.points[0].y + 1
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
