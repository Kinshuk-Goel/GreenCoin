const aboutLink = document.getElementById('about-link');

aboutLink.addEventListener('click', (event) => {
  event.preventDefault();
  const linkTarget = event.target.href;
  animatePageTransition(linkTarget);
})

function animatePageTransition(linkTarget) {
  const body = document.querySelector('body');
  body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = linkTarget;
  }, 500);
}