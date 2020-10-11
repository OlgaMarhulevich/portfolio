let body = document.querySelector('body');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let button = document.querySelector('button');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  body.classList.toggle('body-light-theme');
  body.classList.toggle('body-dark-theme');

  header.classList.toggle('header-light-theme');
  header.classList.toggle('header-dark-theme');

  footer.classList.toggle('footer-light-theme');
  footer.classList.toggle('footer-dark-theme');

  button.classList.toggle('light-button');
  button.classList.toggle('dark-button');
};
