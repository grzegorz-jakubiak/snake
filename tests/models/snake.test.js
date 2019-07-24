import Snake from '../../src/models/snake'
import {
  DIRECTION_LEFT,
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
    const expectedHeadPosition = {
      x: 49,
      y: 49
    }
    const expectedSize = 3
    const expectedDirection = DIRECTION_RIGHT

    expect(snake.size).toBe(expectedSize)
    expect(snake.head()).toEqual(expectedHeadPosition)
    expect(snake.direction).toBe(expectedDirection)
  })

  describe('move', () => {
    it('moves the snake', () => {
      const x = snake.head().x
      snake.move()
      expect(snake.head().x).toBe(x + 1)
    })
  })

  describe('grow', () => {
    it('makes snake grow', () => {
      const size = snake.size
      snake.grow()
      expect(snake.size).toBe(size + 1)
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

  describe('canMove', () => {
    it('can move', () => {
      expect(snake.canMove()).toBe(true)
    })
  })
})
