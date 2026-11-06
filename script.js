const servicios = document.getElementsByTagName('a')[1]
const productos = document.getElementsByTagName('a')[2]
const contactenos = document.getElementsByTagName('a')[3]
const trabaja = document.getElementsByTagName('a')[4]

servicios.addEventListener('click', (ev) => {
  ev.preventDefault()
  window.scrollTo(0, 960)
})

productos.addEventListener('click', (ev) => {
  ev.preventDefault()
  window.scrollTo(0,1700)
})

contactenos.addEventListener('click', (ev) => {
  ev.preventDefault()
  window.scrollTo(0,2700)
})

trabaja.addEventListener('click', (ev) => {
  ev.preventDefault()
  window.scrollTo(0,document.body.scrollHeight)
})

console.log(document.documentElement.scrollTop)
