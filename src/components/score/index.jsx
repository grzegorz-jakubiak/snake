import './style.css'

const Score = (props) => {
  return (
    <div className='score-container'>
      <span className='score'>Score: {props.score}</span>
    </div>
  )
}

export default Score