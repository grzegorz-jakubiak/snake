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
    const { points } = snake
    const emptyBoard = this.emptyBoard()
    points.forEach(point => {
      const { x, y } = point
      const pointRow = new Array(...emptyBoard[y])
      pointRow[x] = 1
      emptyBoard[y] = pointRow
    })

    this.board = emptyBoard
  }

  increaseScore () {
    this.score += 1
  }
}

export default GameOfSnake
