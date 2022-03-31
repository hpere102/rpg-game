const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const image = new Image()
image.src = './images/new-map.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foregroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = './images/down.png'

const playerUpImage = new Image()
playerUpImage.src = './images/up.png'

const playerLeftImage = new Image()
playerLeftImage.src = './images/left.png'

const playerRightImage = new Image()
playerRightImage.src = './images/right.png'

const keys = {
    w: {
      toggle: false
    },
    a: {
      toggle: false
    },
    s: {
      toggle: false
    },
    d: {
      toggle: false
    }
  }

let newKey = "" 
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.toggle = true
      newKey = 'w'
      break
    case 'a':
      keys.a.toggle = true
      newKey = 'a'
      break

    case 's':
      keys.s.toggle = true
      newKey = 's'
      break

    case 'd':
      keys.d.toggle = true
      newKey = 'd'
      break
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.toggle = false
      break
    case 'a':
      keys.a.toggle = false
      break
    case 's':
      keys.s.toggle = false
      break
    case 'd':
      keys.d.toggle = false
      break
  }
})
