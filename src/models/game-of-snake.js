import Snake from 'models/snake'

class GameOfSnake {
  constructor (params = {}) {
    this.boardSize = params.boardSize || 100
    this.board = this.emptyBoard()
    this.score = 0
  }

  emptyBoard () {
    return new Array(this.boardSize).fill(new Array(this.boardSize).fill(0))
  }

  drawSnake (snake) {
    const { position, size } = snake
    this.board = this.emptyBoard().map((row, index) => {
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
