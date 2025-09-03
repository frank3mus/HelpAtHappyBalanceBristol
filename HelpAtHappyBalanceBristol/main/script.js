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

function initCarousel(carouselSelector, mobile = false) {
  const carousel = document.querySelector(carouselSelector);
  if (!carousel) return;

  // Scope everything inside this carousel
  const reviewsTrack = carousel.querySelector('.reviews-track'); 
  const leftArrow = carousel.querySelector('.carousel-arrow.left');
  const rightArrow = carousel.querySelector('.carousel-arrow.right');
  const cards = carousel.querySelectorAll('.review-card');

  let currentIndex = 0; // start on first card

  function updateCarousel() {
    const wrapperWidth = reviewsTrack.parentElement.offsetWidth;
    const cardWidth = cards[0].offsetWidth; 
    let offset;

    if (mobile) {
      // show 1 card at a time
      offset = -(currentIndex * wrapperWidth);
    } else {
      // show multiple cards (desktop)
      offset = -(currentIndex * (cardWidth + 20)); // 20px is gap
    }

    reviewsTrack.style.transform = `translateX(${offset}px)`;

    // hide/show arrows
    leftArrow.style.display = currentIndex <= 0 ? 'none' : 'block';
    rightArrow.style.display = currentIndex >= cards.length - 1 ? 'none' : 'block';
  }

  // Arrow events
  rightArrow.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Initialize
  window.addEventListener('load', updateCarousel);
  window.addEventListener('resize', updateCarousel);
}

// Example usage
initCarousel('#reviews-desktop', false);
initCarousel('#reviews-mobile', true);
