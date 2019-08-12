
import './style.css'

class Menu extends React.Component {
  render () {
    return (
      <div className='game-menu'>
        <div className='menu-header'>
          <h1>Snake 2D</h1>
        </div>
        <div className='game-actions'>
          <button className='play' onClick={this.props.onClick}>Play</button>
        </div>
      </div>
    )
  }
}

export default Menu
