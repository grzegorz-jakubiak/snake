import isEqual from 'is-equal'

class Apple {
  constructor () {
    this.placeApple()
  }

  placeApple (restrictedCoordinates = []) {
    const boardSize = 25
    let appleCoordinates = {
      x: Math.floor(Math.random() * boardSize),
      y: Math.floor(Math.random() * boardSize)
    }

    while (restrictedCoordinates.some((element) => {
      return isEqual(element, appleCoordinates)
    })) {
      appleCoordinates = {
        x: Math.floor(Math.random() * boardSize),
        y: Math.floor(Math.random() * boardSize)
      }
      console.log('placing apple loop whoop!')
    }

    this.x = appleCoordinates.x
    this.y = appleCoordinates.y
  }
}

export default Apple
