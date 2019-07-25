import GameOfSnake from 'models/game-of-snake'
import Snake from 'models/snake'
import Apple from 'models/apple'
import InputControler from 'components/input-controler'
import uuid3 from 'uuid'
import './style.css'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      game: new GameOfSnake({
        snake: new Snake(),
        apple: new Apple()
      })
    }
  }

  newGame () {
    const { game } = this.state
    if (game.gameOver) {
      clearInterval(this.interval)
      return
    }
    game.play()

    this.setState({
      game: game
    })
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.newGame()
    }, 200)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  draw (board) {
    return board.map(rows => {
      const row = rows.map(row => {
        if (row === 1) {
          return <td key={uuid3()} className='snake'></td>
        } else if (row === 2) {
          return <td key={uuid3()} className='apple'></td>
        }  
        else {
          return <td key={uuid3()}></td>
        }
      })

      return <tr key={uuid3()}>{row}</tr>
    })
  }

  render () {
    const { game } = this.state

    return (
      <InputControler snake={game.snake}>
        <span>Score: {game.score}</span>
        <table>
          <tbody>
            {this.draw(game.board)}
          </tbody>
        </table>
      </InputControler>
    )
  }
}

export default Board
