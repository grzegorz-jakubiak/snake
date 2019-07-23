import GameOfSnake from '../../src/models/game-of-snake'
import Snake from '../../src/models/snake';

describe('GameOfSnake', () => {
  let expectedBoardSize

  beforeAll(() => {
    expectedBoardSize = 100
  })

  it('creates new game', () => {
    const expectedScore = 0
    const expectedSnake = new Array(expectedBoardSize).fill(0).fill(1, 46, 49)
    const game = new GameOfSnake()

    expect(game.score).toBe(expectedScore)
    expect(game.board.length).toBe(expectedBoardSize)
    expect(game.board[49]).toEqual(expect.arrayContaining(expectedSnake))
  })

  it('creates new game with snake at different position', () => {
    const snake = new Snake({
      x: 50,
      y: 12
    })

    const game = new GameOfSnake({
      snake: snake
    })
    
    const expectedSnake = new Array(expectedBoardSize).fill(0).fill(1, snake.position.x + snake.size)
    expect(game.board[snake.position.y]).toEqual(expect.arrayContaining(expectedSnake))
  })
})
