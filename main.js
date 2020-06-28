'use strict';

let link = document.querySelector('.login-link'),
  popup = document.querySelector('.modal-login'),
  close = document.querySelector('.modal-close'),
  form = popup.querySelector('form'),
  login = popup.querySelector('[name=login]'),
  password = popup.querySelector('[name=password]'),
  isStorageSupport = true,
  storage = "";

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show')
  login.focus();
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show')
});

form.addEventListener('submit', function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    alert('Нужно ввести пароль!')
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value)
    }
  }
});