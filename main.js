'use strict';

window.loginLink = document.querySelector('.login-link');
window.loginPopup = document.querySelector('.modal-login');
window.loginPopupClose = document.querySelector('.modal-close');
window.loginPopupForm = loginPopup.querySelector('form');
window.loginPopupLogin = loginPopup.querySelector('[name=login]');
window.loginPopupPassword = loginPopup.querySelector('[name=password]');
window.isStorageSupport = true;
window.storage = "";

try {
  window.storage = localStorage.getItem('login');
} catch (err) {
  window.isStorageSupport = false;
}

(function () {
  window.showModalWidow = function (evt) {
    evt.preventDefault();
    window.loginPopup.classList.add('modal-show')

    if (storage) {
      window.loginPopupLogin.value = window.storage;
      window.loginPopupPassword.focus();
    } else {
      window.loginPopupLogin.focus();
    }
  }
})();

(function () {
  window.closeModalWindow = function (evt) {
    evt.preventDefault();
    window.loginPopup.classList.remove('modal-show');
    window.loginPopup.classList.remove('modal-error');
  }
})();

(function () {
  window.validateForm = function (evt) {
    if (!window.loginPopupLogin.value || !window.loginPopupPassword.value) {
      evt.preventDefault();
      window.loginPopup.classList.remove('modal-error');
      window.loginPopup.scrollLeft = loginPopup.scrollLeft;
      window.loginPopup.classList.add('modal-error');
    } else {
      if (window.isStorageSupport) {
        window.localStorage.setItem("login", window.loginPopupLogin.value)
      }
    }
  }
})();

(function () {
  window.checkIsHotKey = function (evt) {
    if (evt.keyCode === 27) {
      let modal;
      try {
        modal = document.querySelector(".modal-show");
      } catch (err) {};
      if (modal) {
        modal.classList.remove("modal-show")
        modal.classList.remove('modal-error');
      };
    }
  }
})();

window.loginLink.addEventListener('click', showModalWidow);
window.loginPopupClose.addEventListener('click', closeModalWindow);
window.loginPopupForm.addEventListener('submit', validateForm);
window.addEventListener('keydown', checkIsHotKey);