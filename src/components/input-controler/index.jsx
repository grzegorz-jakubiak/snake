import {
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  ARROW_DOWN
} from 'consts/controls'
import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  DIRECTION_DOWN
} from 'consts/directions'

class InputControler extends React.Component {
  componentDidMount () {
    document.addEventListener('keydown', event => {
      const { snake } = this.props
      this.changeDirection(event, snake)
    })
  }

  changeDirection (event, snake) {
    switch (event.keyCode) {
      case ARROW_UP:
        snake.changeDirection(DIRECTION_UP)
        break
      case ARROW_DOWN:
        snake.changeDirection(DIRECTION_DOWN)
        break
      case ARROW_LEFT:
        snake.changeDirection(DIRECTION_LEFT)
        break
      case ARROW_RIGHT: 
        snake.changeDirection(DIRECTION_RIGHT)
        break
    }
  }

  render () {
    return (<div>{this.props.children}</div>)
  }

}

export default InputControler