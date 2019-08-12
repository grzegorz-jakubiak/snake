import {
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  ARROW_DOWN
} from 'consts/controls'

function swipe(element, callback) {
  element.addEventListener('touchstart', startTouch, false)
  element.addEventListener('touchmove', moveTouch, false)

  let initialX = null
  let initialY = null

  function startTouch (e) {
    initialX = e.touches[0].clientX
    initialY = e.touches[0].clientY
  }

  function moveTouch (e) {
    if (initialX === null) {
      return
    }

    if (initialY === null) {
      return
    }

    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY

    const diffX = initialX - currentX
    const diffY = initialY - currentY

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        callback({ keyCode: ARROW_LEFT })
      } else {
        callback({ keyCode: ARROW_RIGHT })
      }
    } else {
      if (diffY > 0) {
        callback({ keyCode: ARROW_UP })
      } else {
        callback({ keyCode: ARROW_DOWN })
      }
    }

    initialX = null
    initialY = null

    e.preventDefault()
  }
}

export default swipe
