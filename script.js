const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})
/*la conatante que llama el boton derecho esta pendiente del 
click, si se da click en el mismo se le suma 1 a la varible activeslide y se 
revisa la condicion que dice si activeslider es mayor que el largo de la contante slide -1
entonces activeslide va a ser 0 */

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1 
  }

  setBgToBody()
  setActiveSlide()
})
//lo mismo pero al contrario

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}