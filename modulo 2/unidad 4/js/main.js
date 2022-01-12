

const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
  $("#nav").removeClass("justify-content-end")
  $("#nav").addClass("flex-column justify-content-start")
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
    $("#nav").removeClass("flex-column justify-content-start")
    $("#nav").addClass("justify-content-end")
  }
})