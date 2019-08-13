import Board from 'components/board'
import InputControler from 'components/input-controler'
import Score from 'components/score'
import GameOver from 'components/game-over'
import Menu from 'components/menu'
import GameOfSnake from 'models/game-of-snake'
import Snake from 'models/snake'
import Apple from 'models/apple'
import changingInterval from 'changing-interval'
import './style.css'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      game: new GameOfSnake({
        snake: new Snake(),
        apple: new Apple()
      })
    }

    this.newGame = this.newGame.bind(this)
  }

  intervalAction () {
    const { game } = this.state
    if (game.gameOver) {
      this.interval.clear()
      return
    }
    game.play()

    this.setState({
      game: game
    })
  }

  intervalDelay () {
    const { game } = this.state
    if (game.score >= 25) {
      return 30
    } else if (game.score >= 20) {
      return 50
    } else if (game.score >= 15) {
      return 90
    } else if (game.score >= 10) {
      return 130
    } else if (game.score >= 5) {
      return 190
    } else {
      return 270
    }
  }

  newGame () {
    this.interval = changingInterval(() => {
      this.intervalAction()
    }, () => {
      return this.intervalDelay()
    })
  }

  componentWillUnmount () {
    this.interval.clear()
  }

  render () {
    const { game } = this.state

    return (
        <InputControler snake={game.snake}>
          <div className='game'>
            <div className='game-top'>
              <div className='game-messages'>
                <Menu onClick={this.newGame}/>
                <GameOver isOver={game.gameOver} />
              </div>
              <Board board={game.board} />
            </div>
            <Score score={game.score} />
          </div>
        </InputControler>
    )
  }
}

export default Game
