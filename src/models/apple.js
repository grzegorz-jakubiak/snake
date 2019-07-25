class Apple {
  constructor () {
    this.placeApple()
  }

  placeApple () {
    const boardSize = 25
    this.x = Math.floor(Math.random() * boardSize)
    this.y = Math.floor(Math.random() * boardSize)
  }
}

export default Apple
