import Snake from '../../src/models/snake'
import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_DOWN
} from '../../src/consts/directions'

describe('Snake', () => {
  let snake

  beforeAll(() => {
    snake = new Snake()
  })

  it('creates new Snake', () => {
    const expectedHeadPosition = {
      x: 12,
      y: 12
    }
    const expectedDirection = DIRECTION_RIGHT

    expect(snake.head()).toEqual(expectedHeadPosition)
    expect(snake.direction).toBe(expectedDirection)
  })

  describe('size', () => {
    it('returns snake size', () => {
      const expectedSize = 3
      expect(snake.size()).toBe(expectedSize)
    })
  })

  describe('move', () => {
    it('moves the snake', () => {
      const x = snake.head().x
      snake.move()
      expect(snake.head().x).toBe(x + 1)
    })
  })

  describe('changeDirection', () => {
    it('changes direction when allowed direction change', () => {
      snake.changeDirection(DIRECTION_DOWN)
      expect(snake.direction).toBe(DIRECTION_DOWN)
    })

    it('does not changes direction when unallowed direction change', () => {
      snake.changeDirection(DIRECTION_LEFT)
      expect(snake.direction).toBe(snake.direction)
    })
  })
})
