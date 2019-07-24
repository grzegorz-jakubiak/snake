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
    this.position = this.calculatePosition(this.boardSize)
    this.direction = params.direction || DIRECTION_RIGHT
  }

  calculatePosition (boardSize) {
    const y = boardSize / 2 - 1
    const x = y
    return {
      x: x,
      y: y
    }
  }

  grow () {
    this.size += 1
  }

  move () {
    switch (this.direction) {
      case DIRECTION_LEFT:
        this.position.x -= 1
        break
      case DIRECTION_RIGHT:
        this.position.x += 1
        break
      case DIRECTION_UP:
        this.position.y -= 1
        break
      case DIRECTION_DOWN:
        this.position.y += 1
        break
    }
  }

  canMove () {
    let nextX, nextY
    switch (this.direction) {
      case DIRECTION_LEFT:
        nextX = this.position.x - 1
        return this.areCoordinatesInBoundries(nextX)
      case DIRECTION_RIGHT:
        nextX = this.position.x + 1
        return this.areCoordinatesInBoundries(nextX)
      case DIRECTION_UP:
        nextY = this.position.y - 1
        return this.areCoordinatesInBoundries(nextY)
      case DIRECTION_DOWN:
        nextY = this.position.y + 1
        return this.areCoordinatesInBoundries(nextY)
    }
  }

  areCoordinatesInBoundries (coordinate) {
    const minCoordinate = 0
    const maxCoordinate = this.boardSize - 1
    return minCoordinate <= coordinate && coordinate <= maxCoordinate
  }

  changeDirection (direction) {
    this.direction = direction
  }
}

export default Snake
