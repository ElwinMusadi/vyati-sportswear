$(document).ready(function() {
  $(".preloader").fadeOut(1500);

  const btnToggle = document.querySelector('.btn-toggle');
  const menuIcon = document.querySelector('.menu');
  const closeIcon = document.querySelector('.close');
  const mobileNav = document.querySelector('.mobile-nav');
  const navbar = document.querySelector('#navbar');

  // Mobile Toggle Navbar
  btnToggle.addEventListener('click', function () {
    if (closeIcon.classList.contains('hidden')) {
      closeIcon.classList.remove('hidden')
      menuIcon.classList.add('hidden');
      mobileNav.classList.replace('-right-full', 'right-0');
      mobileNav.classList.replace('opacity-0', 'opacity-100');
      window.onscroll = navbarScroll;
    } else {
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      mobileNav.classList.replace('right-0', '-right-full');
      mobileNav.classList.replace("opacity-100", "opacity-0");
    }
  });

  // Navbar on Scroll 
  function navbarScroll() {
    if (this.scrollY >= 10) {
      navbar.classList.add("bg-black-sport-500");
      navbar.classList.replace("py-5", "py-4");
    } else {
      navbar.classList.remove("bg-black-sport-500");
      navbar.classList.replace("py-4", "py-5");
    }
  }

  window.onscroll = navbarScroll;

  // Owl Carousel - Testimonial
  $(".owl-carousel").owlCarousel({
    margin: 16,
    nav: true,
    // autiHeight: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
    },
  });

  // Smooth scrolling
  $('.page-scroll').on('click', function(e) {
    if( this.hash !== '' ) {
      e.preventDefault();

      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, 'easeInOutExpo')
    }
  })
})