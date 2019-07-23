import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  DIRECTION_DOWN
} from 'consts/directions'

class Snake {
  constructor (params = {}) {
    this.size = 3
    this.position = this.calculatePosition(params.boardSize, this.size)
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

  changeDirection (direction) {
    this.direction = direction
  }
}

export default Snake
