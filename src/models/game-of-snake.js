class GameOfSnake {
  constructor (params = {}) {
    this.boardSize = 25
    this.board = this.emptyBoard()
    this.snake = params.snake
    this.apple = params.apple
    this.gameOver = false
    this.score = 0
  }

  emptyBoard () {
    return new Array(this.boardSize).fill(new Array(this.boardSize).fill(0))
  }

  draw () {
    const { points } = this.snake
    const newBoard = this.emptyBoard()
    points.forEach(point => {
      const { x, y } = point
      const pointRow = new Array(...newBoard[y])
      pointRow[x] = 1
      newBoard[y] = pointRow
    })

    const { x, y } = this.apple
    const appleRow = new Array(...newBoard[y])
    appleRow[x] = 2
    newBoard[y] = appleRow

    this.board = newBoard
  }

  checkCollision () {
    const { x, y } = this.snake.head()
    const minCoordinate = 0
    const maxCoordinate = this.boardSize - 1
    let collision = false

    if (this.snake.didCollidedWithItSelf()) {
      collision = true
    }

    if (x < minCoordinate || x > maxCoordinate) {
      collision = true
    }

    if (y < minCoordinate || y > maxCoordinate) {
      collision = true
    }

    return collision
  }

  checkApple () {
    const { x: appleX, y: appleY } = this.apple
    const { x: snakeX, y: snakeY } = this.snake.head()

    if (snakeX === appleX && snakeY === appleY) {
      return true
    } else {
      return false
    }
  }

  play () {
    this.draw()
    this.snake.move()
    if (this.checkCollision()) {
      this.gameOver = true
      return
    }

    if (this.checkApple()) {
      this.snake.eatApple()
      this.apple.placeApple()
      this.increaseScore()
    }
  }

  increaseScore () {
    this.score += 1
  }
}

export default GameOfSnake
