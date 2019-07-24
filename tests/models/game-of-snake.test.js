import GameOfSnake from '../../src/models/game-of-snake'
import Snake from '../../src/models/snake'

describe('GameOfSnake', () => {
  let expectedBoardSize
  let game

  beforeAll(() => {
    expectedBoardSize = 100
    game = new GameOfSnake()
  })

  it('creates new game with empty board', () => {
    const expectedScore = 0
    const expectedSnake = new Array(expectedBoardSize).fill(new Array(expectedBoardSize).fill(0))

    expect(game.score).toBe(expectedScore)
    expect(game.board.length).toBe(expectedBoardSize)
    expect(game.board).toEqual(expect.arrayContaining(expectedSnake))
  })

  it('creates new game with drawn snake', () => {
    const snake = new Snake({
      boardSize: game.boardSize
    })
    game.drawSnake(snake)

    const expectedSnake = new Array(expectedBoardSize).fill(0).fill(1, snake.head().x + snake.size)
    expect(game.board[snake.head().y]).toEqual(expect.arrayContaining(expectedSnake))
  })
})
