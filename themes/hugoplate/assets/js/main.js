// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
})();

// Initialize banner carousel
document.addEventListener('DOMContentLoaded', function() {
  const bannerCarousel = document.querySelector('.banner-carousel');
  if (bannerCarousel) {
    new Swiper('.banner-carousel', {
      loop: true,
      autoplay: {
        delay: 50000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.banner-carousel .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.banner-carousel .swiper-button-next',
        prevEl: '.banner-carousel .swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 0,
    });
  }
});