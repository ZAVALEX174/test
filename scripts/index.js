const burgerBatton = document.querySelector('.burger__button');
const menu = document.querySelector('.header__nav');
burgerBatton.addEventListener('click', (e) => {
  menu.classList.toggle('is-active');
})


const drop = document.querySelector('.openbox');
const content = document.querySelector('.content');

drop.addEventListener('click', (e) => {
  e.stopPropagation();
  content.classList.toggle('vis');
});

// Закрытие при клике вне области
document.addEventListener('click', (e) => {
  if (!content.contains(e.target) &&
    e.target !== drop &&
    content.classList.contains('vis')) {
    content.classList.remove('vis');
  }
});