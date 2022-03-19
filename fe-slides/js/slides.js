// Slide Panel 

const button = document.querySelector('button')
const body = document.body

button.addEventListener('click', _ => {
  body.classList.toggle('offsite-is-open')
})
// Modal

const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')

modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open')
})

modalCloseButton.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open')
})

modalOverlay.addEventListener('click', event => {
  if (!event.target.closest('.modal')) {
    document.body.classList.remove('modal-is-open')
  }
})
// Random Colors 
const buttonColor = document.querySelector('.changeColor');
const wrapper = document.querySelector('.colorWrapper');
buttonColor.addEventListener('click', () => {
  wrapper.style.backgroundColor = colors();
});

function colors() {
  let colorArray = [];    
  for(let i =0; i < 3 ; i++){
    colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
  }
  // rgb -> hex
  let color = colorArray
    .map( x => x.toString(16))
    .join('');

  return `#${color}`;
}