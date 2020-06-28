'use strict';

window.mapLinks = document.querySelectorAll('[href="map.html"]');
window.modalMap = document.querySelector('.modal-map');
window.modalMapImg = modalMap.querySelector('img');
window.modalMapCloseBTN = document.querySelector('.modal-map-close');
window.loginLink = document.querySelector('.login-link');
window.modalLogin = document.querySelector('.modal-login');
window.modalLoginCloseBTN = document.querySelector('.modal-login-close');
window.modalLoginForm = modalLogin.querySelector('form');
window.modalLoginLoginInput = modalLogin.querySelector('[name=login]');
window.modalLoginPasswordInput = modalLogin.querySelector('[name=password]');
window.isStorageSupport = true;
window.storage = "";

try {
  window.storage = localStorage.getItem('login');
} catch (err) {
  window.isStorageSupport = false;
}