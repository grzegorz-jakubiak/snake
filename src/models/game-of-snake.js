class GameOfSnake {
  constructor (params = {}) {
    this.boardSize = params.boardSize || 100
    this.board = this.emptyBoard()
    this.score = 0
  }

  emptyBoard () {
    return new Array(this.boardSize).fill(new Array(this.boardSize).fill(0))
  }

  draw (snake, apple) {
    const { points } = snake
    const newBoard = this.emptyBoard()
    points.forEach(point => {
      const { x, y } = point
      const pointRow = new Array(...newBoard[y])
      pointRow[x] = 1
      newBoard[y] = pointRow
    })

    const { x, y } = apple
    const appleRow = new Array(...newBoard[y])
    appleRow[x] = 2
    newBoard[y] = appleRow

    this.board = newBoard
  }

  increaseScore () {
    this.score += 1
  }
}

export default GameOfSnake
