import GameOfSnake from 'models/game-of-snake'
import Snake from 'models/snake'
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
import uuid3 from 'uuid'
import './style.css'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      snake: new Snake({
        boardSize: props.boardSize
      }),
      game: new GameOfSnake({
        boardSize: props.boardSize
      })
    }
  }

  componentDidMount () {
    const { snake } = this.state
    this.interval = setInterval(() => {
      if (!snake.canMove()) {
        clearInterval(this.interval)
        return
      }

      snake.move()
      this.setState({
        snake: snake
      })
    }, 1000)

    document.addEventListener('keydown', event => {
      this.changeDirection(event, snake)
    })
  }

  componentWillUnmount () {
    clearInterval(this.interval)
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

  draw (game) {
    return game.board.map(rows => {
      const row = rows.map(row => {
        if (row === 1) {
          return <td key={uuid3()} className='snake'></td>
        } else {
          return <td key={uuid3()}></td>
        }
      })

      return <tr key={uuid3()}>{row}</tr>
    })
  }

  render () {
    const { game, snake } = this.state
    game.drawSnake(snake)

    return (
      <table>
        <tbody>
          {this.draw(game)}
        </tbody>
      </table>
    )
  }
}

export default Board
