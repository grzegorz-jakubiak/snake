import Snake from 'models/snake'

class GameOfSnake {
  constructor (params = {}) {
    const boardSize = params.boardSize || 100
    this.board = new Array(boardSize).fill(new Array(boardSize).fill(0))
    this.score = 0
  }

  boardSize () {
    return this.board.length
  }

  drawSnake (snake) {
    const { position, size } = snake
    this.board = this.board.map((row, index) => {
      if (index === position.y) {
        const snakeRow = new Array(...row)
        snakeRow.fill(1, position.x, position.x + size)
        return snakeRow
      }

      return new Array(...row)
    })
  }

  increaseScore () {
    this.score += 1
  }
}

export default GameOfSnake
