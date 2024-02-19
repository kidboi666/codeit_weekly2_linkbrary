const navScrollEvent = (event) => {
  const $nav = document.querySelector('.header_nav');
  console.dir($nav);
  if (window.scrollY > 30) {
    $nav.classList.add('nav_shadow');
  } else if (window.scrollY < 30) {
    $nav.classList.remove('nav_shadow');
  }
};

window.addEventListener('scroll', navScrollEvent);
