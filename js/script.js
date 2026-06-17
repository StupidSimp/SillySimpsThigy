'use strict';
const burgerBtn = document.getElementById('burger-btn');
const menuLinks = document.getElementById('menu-links');

const feed = document.getElementById('feed-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const btnUp = document.getElementById('btn-up');

const getScrollStep = () => {
  const firstCard = feed.querySelector('.news-elem');
  if (!firstCard) return 300;
  const cardWidth = firstCard.offsetWidth; 
  return cardWidth + 30; 
}

nextBtn.addEventListener('click', () => {
  feed.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  feed.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
});

burgerBtn.addEventListener('click', () => {
  menuLinks.classList.toggle("navmenu-header__list--open")
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 350) {
    btnUp.classList.add('btn-up--visible');
  } else {
    btnUp.classList.remove('btn-up--visible');
  }
});

btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});