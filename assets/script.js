document.querySelector('.nav-toggle').addEventListener('click', function () {
  var nav = document.getElementById('nav');
  var open = nav.classList.toggle('open');
  this.setAttribute('aria-expanded', open);
});
var y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
