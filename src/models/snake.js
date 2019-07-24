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
    this.position = this.calculatePosition(this.boardSize, this.size)
    this.direction = params.direction || DIRECTION_RIGHT
  }

  calculatePosition (boardSize, size) {
    const y = boardSize / 2 - 1
    const x = y - size
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
        this.position.y += 1
        break
      case DIRECTION_DOWN:
        this.position.y -= 1
        break
    }
  }

  canMove () {
    switch (this.direction) {
      case DIRECTION_LEFT:
      case DIRECTION_RIGHT:
        return this.areCoordinatesInBoundries(this.position.x)
      case DIRECTION_UP:
      case DIRECTION_DOWN:
        return this.areCoordinatesInBoundries(this.position.y)  
    }
  }

  areCoordinatesInBoundries (coordinate) {
    const minCoordinate = 0
    const maxCoordinate = this.boardSize - 1
    return minCoordinate <= coordinate - 1 && coordinate + 1 <= maxCoordinate
  }

  changeDirection (direction) {
    this.direction = direction
  }
}

export default Snake
