const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576



const image = new Image()
image.src = './images/new-map.png'
console.log(image)


const playerDownImage = new Image()
playerDownImage.src = './images/down.png'

const playerUpImage = new Image()
playerUpImage.src = './images/up.png'

const playerLeftImage = new Image()
playerLeftImage.src = './images/left.png'

const playerRightImage = new Image()
playerRightImage.src = './images/right.png'

class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position
    this.image = image
    
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

const background = new Sprite ({
  position: {
    x:0,
    y:-2610
  },
  image: image
})

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

function animate() {
  window.requestAnimationFrame(animate)
  background.draw()
  c.drawImage(
    playerDownImage,
    0,
    0,
    playerDownImage.width / 4,
    playerDownImage.height,
    canvas.width / 2 - (playerDownImage.width / 4) / 2,
    canvas.height / 2 - playerDownImage.height / 2,
    playerDownImage.width / 4,
    playerDownImage.height
  )
  if (keys.w.toggle) { background.position.y = background.position.y + 3
  } else if (keys.a.toggle) { background.position.x = background.position.x + 3
  } else if (keys.s.toggle) { background.position.y = background.position.y - 3
  } else if (keys.d.toggle) { background.position.x = background.position.x - 3
  }

}

animate();


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

