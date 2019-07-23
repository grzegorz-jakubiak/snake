import GameOfSnake from 'models/game-of-snake'
import Snake from 'models/snake'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      snake: new Snake(),
      game: new GameOfSnake()
    }
  }

  render () {
    const { game, snake } = this.state
    game.insertSnake(snake)
    console.log(game)

    return (
      <table style={{ border: '1px solid black'}}>
        <tbody>
          {
            game.board.map(rows => {
              const row = rows.map(row => {
                if (row === 1) {
                  return <td style={{ width: '30px', height: '30px', backgroundColor: 'black' }}></td>
                } else {
                  return <td style={{ width: '30px', height: '30px' }}></td>
                }
              })

              return <tr>{row}</tr>
            })
          }
        </tbody>
      </table>
    )
  }
}

export default Board
