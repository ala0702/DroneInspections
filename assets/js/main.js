// equipment

ScrollReveal().reveal('.drone-details', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  easing: 'ease',
});

// values
function checkScreenSize() {
  var element = document.getElementById('values');
  if (window.innerWidth < 768) {
    element.classList.remove('p-5');
  } else {
    element.classList.add('p-5');
  }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('DOMContentLoaded', checkScreenSize);
