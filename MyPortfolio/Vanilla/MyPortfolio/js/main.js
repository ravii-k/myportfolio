const navSlide = () => {
  // DOM Elements
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navLinks');
  const navLinks = document.querySelectorAll('.navLinks li');

  burger.addEventListener('click', () => {
    // Toggle Nav for Mobile
    nav.classList.toggle('navActive');

    // Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
      }
    });

    // Burger/Close Button Animation
    burger.classList.toggle('toggleOpenClose');
  });
}

navSlide();

// Smooth Scrolling
const navScroll = new SmoothScroll('nav ul li a[href*="#"]', {
  speed: 800
});

const projectBtnScroll = new SmoothScroll('header div a[href*="#"]', {
  speed: 2300
});

const navLogo = new SmoothScroll('nav div a[href*="#"]', {
  speed: 1200
});