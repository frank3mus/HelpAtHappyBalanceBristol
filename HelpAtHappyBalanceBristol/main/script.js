const header = document.querySelector("header");

window.addEventListener("scroll" , function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};
const reviewsTrack = document.querySelector('.reviews-track'); 
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');
const cards = document.querySelectorAll('.review-card');

// start on middle card (round up if odd number of cards)
let currentIndex = Math.ceil(cards.length / 2) - 1; 
const cardWidth = cards[0].offsetWidth + 20; // card width + margin

function updateCarousel() {
  const wrapperWidth = reviewsTrack.parentElement.offsetWidth;
  const offset = -(currentIndex * cardWidth) + (wrapperWidth / 2 - cardWidth / 2);
  reviewsTrack.style.transform = `translateX(${offset}px)`;
}

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
});

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCarousel();
});

// Initialize
window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);
