import uuid3 from 'uuid'
import './style.css'

class Board extends React.Component {
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
    return (
      <div className='board-wrapper'>
        <table>
          <tbody>
            {this.draw(this.props.board)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board
