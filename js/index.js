
const colors = ['2ecc71', '8e44ad', 'e67e22', '14d0ff', 'f1c40f', 'd11f66', 'c0392b', '4cd137']
const keys = document.querySelectorAll(`.key`)
const keyboard = document.querySelectorAll(`.keyboard`)

const playAndColor = keyNumber => {
   const audio = document.querySelector(`.audio__${keyNumber}`)
   const key = document.querySelector(`.key__${keyNumber}`)
   const r = colors[Math.floor(Math.random() * (colors.length - 1))]

   audio.play()
   audio.currentTime = 0
  
   key.style.borderColor = `#${r}` 
   key.style.color = `#${r}` 
   setTimeout(() => { 
     key.style.borderColor = `#fff` 
     key.style.color = `#fff` 
   }, 400)
}

window.addEventListener(`keydown`, e => playAndColor(e.keyCode))

keys.forEach(key => key.addEventListener('click', function(e) {
  const reg = /\d{2}/
  const str = this.className
  playAndColor(str.match(reg)[0]) 
}))