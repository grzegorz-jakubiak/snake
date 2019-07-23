import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  DIRECTION_DOWN
} from 'consts/directions'

class Snake {
  constructor (params = {}) {
    this.position = {
      x: params.x || 46,
      y: params.y || 49
    }
    this.size = params.size || 3
    this.direction = params.direction || DIRECTION_RIGHT
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
