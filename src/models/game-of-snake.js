import Snake from 'models/snake'

class GameOfSnake {
  constructor (params = {}) {
    const boardSize = params.boardSize || 100
    const snake = params.snake || new Snake()
    this.board = this.__createBoard(boardSize, snake)
    this.score = 0
  }

  __createBoard (boardSize, snake) {
    const board = new Array(boardSize).fill(new Array(boardSize).fill(0))
    return this.insertSnake(board, snake)
  }

  insertSnake (board, snake) {
    const { position, size } = snake
    return board.map((row, index) => {
      if (index === position.y) {
        const arr = new Array(...row)
        arr.fill(1, position.x, position.x + size)
        return arr
      }

      return new Array(...row)
    })
  }

  increaseScore () {
    this.score += 1
  }
}

export default GameOfSnake
