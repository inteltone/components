const compare = document.querySelector('.compare')
const slider = document.querySelector('.slider')
slider.addEventListener('input', () => {
  compare.style.setProperty('--pos', `${slider.value}%`);
});