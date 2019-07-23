import Snake from '../../src/models/snake'
import {
  DIRECTION_RIGHT,
  DIRECTION_DOWN
} from '../../src/consts/directions'

describe('Snake', () => {
  let snake

  beforeAll(() => {
    snake = new Snake({
      boardSize: 100
    })
  })

  it('creates new Snake', () => {
    const expectedPosition = {
      x: 46,
      y: 49
    }
    const expectedSize = 3
    const expectedDirection = DIRECTION_RIGHT
    
    expect(snake.size).toBe(expectedSize)
    expect(snake.position).toEqual(expectedPosition)
    expect(snake.direction).toBe(expectedDirection)
  })

  it('moves the snake', () => {
    const x = snake.position.x
    snake.move()
    expect(snake.position.x).toBe(x + 1)
  })

  it('makes snake grow', () => {
    const size = snake.size
    snake.grow()
    expect(snake.size).toBe(size + 1)
  })

  it('changes direction', () => {
    snake.changeDirection(DIRECTION_DOWN)
    expect(snake.direction).toBe(DIRECTION_DOWN)
  })
})
