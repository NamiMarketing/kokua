// Initialize Swiper for image carousel
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.image-section__swiper', {
    loop: true,
    speed: 600,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'dot',
      bulletActiveClass: 'dot--active',
    },

    // Autoplay
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // Custom arrow click handlers
  const leftArrow = document.querySelector('.image-section__arrows .arrow--left');
  const rightArrow = document.querySelector('.image-section__arrows .arrow--right');

  if (leftArrow) {
    leftArrow.addEventListener('click', function() {
      swiper.slidePrev();
    });
  }

  if (rightArrow) {
    rightArrow.addEventListener('click', function() {
      swiper.slideNext();
    });
  }
});
