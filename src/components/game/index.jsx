import Board from 'components/board'
import InputControler from 'components/input-controler'
import Score from 'components/score'
import GameOver from 'components/game-over'
import Menu from 'components/menu'
import GameOfSnake from 'models/game-of-snake'
import Snake from 'models/snake'
import Apple from 'models/apple'
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

  newGame () {
    this.interval = setInterval(() => {
      const { game } = this.state
      if (game.gameOver) {
        clearInterval(this.interval)
        return
      }
      game.play()

      this.setState({
        game: game
      })
    }, 300)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
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
