
import { useState } from 'react'
import './style.css'

const Menu = (props) => {
  const [isMenuVisible, toggleMenu] = useState(true)

  return (
    <div className='game-menu' style={{ 'display': `${isMenuVisible ? 'block' : 'none'}`}}>
      <div className='menu-header'>
        <h1>Snake 2D</h1>
      </div>
      <div className='game-actions'>
        <button className='play' onClick={() => {
          props.onClick()
          toggleMenu(false)
        }}>Play</button>
      </div>
    </div>
  )
}

export default Menu
