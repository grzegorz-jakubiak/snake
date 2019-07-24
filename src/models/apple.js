class Apple {
  constructor (params = {}) {
    this.x = params.x || Math.floor(Math.random() * (params.boardSize || 100))
    this.y = params.y || Math.floor(Math.random() * (params.boardSize || 100))
  }
}

export default Apple
