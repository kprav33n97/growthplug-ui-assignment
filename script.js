const hamburger = document.querySelector('.hamburger');
const headerTopRight = document.querySelector('.header-top-right');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  headerTopRight.classList.toggle('active');
});