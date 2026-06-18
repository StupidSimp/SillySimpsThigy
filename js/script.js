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

const randmainbase = [
  {
    quote: "Если бы мне пришлось вести эту машину, прошлогоднюю или даже тележку для покупок, я бы повел ее на победу — Максим Ф.",
    img:"img/images-Photoroom.png"
  },
  {
    quote: "Если бы мы все могли выбрать, с кем разделить подиум, то, честно говоря, наверное, друг с другом — Жорик Р.",
    img:"img/photo_rozanov_phylosophy-Photoroom.png"
  },
  {
    quote: "То, что я спокойный, не значит, что я не беспощадный на трассе. Одно не должно идти в ущерб другому —  Олег П.",
    img:"img/Sbulgakov-Photoroom.png"
  }
];

const setRandomHuman = () =>{
  const rndIndex = Math.floor(Math.random() * randmainbase.length);
  const select = randmainbase[rndIndex];

  document.getElementById('rand-text').textContent = select.quote;
  document.getElementById('rand-photo').src = select.img;
  console.log(select);
}
window.addEventListener('DOMContentLoaded', setRandomHuman);











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
window.addEventListener('scroll', () => {
  if (menuLinks.classList.contains('navmenu-header__list--open')) {
    menuLinks.classList.remove('navmenu-header__list--open');
  }
});

btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});