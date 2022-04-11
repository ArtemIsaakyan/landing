var firstArrow = document.querySelector('.first');
var secondArrow = document.querySelector('.second');
var firstSublist = document.querySelector('.first-sublist');
var secondSublist = document.querySelector('.second-sublist');

firstArrow.addEventListener('click', function () {
  firstArrow.classList.toggle('arrow-active');
  firstSublist.classList.toggle('visible');
});

secondArrow.addEventListener('click', function () {
  secondArrow.classList.toggle('arrow-active');
  secondSublist.classList.toggle('visible');
});
