import './style.css'

const GameOver = (props) => {
  if (props.isOver === false) {
    return ''
  }
  
  return <h1 className='game-over'>Game Over!</h1>
}

export default GameOver
