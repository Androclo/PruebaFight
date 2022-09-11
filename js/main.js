
//nav fixed on top
const main = document.querySelector('#nav-scroll')
const nav = document.querySelector('#nav')

let offset = main.offsetHeight - nav.offsetHeight

window.onscroll = function () {
  if (window.scrollY > offset) {
    nav.classList.remove('bottom-nav')
    nav.classList.add('top-nav')
  } else {
    nav.classList.add('bottom-nav')
    nav.classList.remove('top-nav')
  }
}

const logo = document.querySelector('main-logo')

// dia actual

let lunes = document.querySelectorAll('.lunes')
let martes = document.querySelectorAll('.martes')
let jueves = document.querySelectorAll('.jueves')
let viernes = document.querySelectorAll('.viernes')
let sabado = document.querySelectorAll('.sabado')

let miercoles = document.querySelectorAll('.miercoles')

window.onload =  function() {

  switch (new Date().getDay()) {

    case 1:
      Array.from(lunes).forEach(element => element.classList.add('dia-actual'))
      Array.from(martes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(miercoles).forEach(element => element.classList.remove('dia-actual'))
      Array.from(jueves).forEach(element => element.classList.remove('dia-actual'))
      Array.from(viernes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(sabado).forEach(element => element.classList.remove('dia-actual'))
      break

    case 2:
         Array.from(lunes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(martes).forEach(element => element.classList.add('dia-actual'))
      Array.from(miercoles).forEach(element => element.classList.remove('dia-actual'))
      Array.from(jueves).forEach(element => element.classList.remove('dia-actual'))
      Array.from(viernes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(sabado).forEach(element => element.classList.remove('dia-actual'))('dia-actual')
      break
    case 3:
         Array.from(lunes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(martes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(miercoles).forEach(element => element.classList.add('dia-actual'))
      Array.from(jueves).forEach(element => element.classList.remove('dia-actual'))
      Array.from(viernes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(sabado).forEach(element => element.classList.remove('dia-actual'))('dia-actual')
      break
      case 4:
            Array.from(lunes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(martes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(miercoles).forEach(element => element.classList.remove('dia-actual'))
      Array.from(jueves).forEach(element => element.classList.add('dia-actual'))
      Array.from(viernes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(sabado).forEach(element => element.classList.remove('dia-actual'))('dia-actual')
      break
        break

    case 5:
         Array.from(lunes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(martes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(miercoles).forEach(element => element.classList.remove('dia-actual'))
      Array.from(jueves).forEach(element => element.classList.remove('dia-actual'))
      Array.from(viernes).forEach(element => element.classList.add('dia-actual'))
      Array.from(sabado).forEach(element => element.classList.remove('dia-actual'))('dia-actual')
      break

    case 6:
         Array.from(lunes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(martes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(miercoles).forEach(element => element.classList.remove('dia-actual'))
      Array.from(jueves).forEach(element => element.classList.remove('dia-actual'))
      Array.from(viernes).forEach(element => element.classList.remove('dia-actual'))
      Array.from(sabado).forEach(element => element.classList.add('dia-actual'))('dia-actual')
      break
      case 0:
        Array.from(lunes).forEach(element => element.classList.remove('dia-actual'))
     Array.from(martes).forEach(element => element.classList.remove('dia-actual'))
     Array.from(miercoles).forEach(element => element.classList.remove('dia-actual'))
     Array.from(jueves).forEach(element => element.classList.remove('dia-actual'))
     Array.from(viernes).forEach(element => element.classList.remove('dia-actual'))
     Array.from(sabado).forEach(element => element.classList.remove('dia-actual'))('dia-actual')
     break
  }
}
