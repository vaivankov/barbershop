'use strict';

let link = document.querySelector('.login-link'),
  popup = document.querySelector('.modal-login'),
  close = document.querySelector('.modal-close');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show')
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show')
});