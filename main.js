'use strict';

window.mapLinks = document.querySelectorAll('[href="map.html"]');
window.modalMap = document.querySelector('.modal-map');
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

(function () {
  window.showModalWidow = function (evt, modal) {
    evt.preventDefault();
    modal.classList.add('modal-show')
  }
})();

(function () {
  window.checkLocalStorage = function (evt) {
    if (storage) {
      window.modalLoginLoginInput.value = window.storage;
      window.modalLoginPasswordInput.focus();
    } else {
      window.modalLoginLoginInput.focus();
    }
  }
})();

(function () {
  window.closeModalWindow = function (evt) {
    evt.preventDefault();
    let modal;
    try {
      modal = document.querySelector(".modal-show");
    } catch (err) { };
    if (modal) {
      modal.classList.remove("modal-show")
      modal.classList.remove('modal-error');
    };
  }
})();

(function () {
  window.validateForm = function (evt) {
    if (!window.modalLoginLoginInput.value || !window.modalLoginPasswordInput.value) {
      evt.preventDefault();
      window.modalLogin.classList.remove('modal-error');
      window.modalLogin.scrollLeft = modalLogin.scrollLeft;
      window.modalLogin.classList.add('modal-error');
    } else {
      if (window.isStorageSupport) {
        window.localStorage.setItem("login", window.modalLoginLoginInput.value)
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

mapLinks[0].addEventListener('click', function () { showModalWidow.call(event, event, window.modalMap) });
mapLinks[1].addEventListener('click', function () { showModalWidow.call(event, event, window.modalMap) });
modalMapCloseBTN.addEventListener('click', closeModalWindow);
loginLink.addEventListener('click', function () { showModalWidow.call(event, event, window.modalLogin) });
modalLoginCloseBTN.addEventListener('click', closeModalWindow);
modalLoginForm.addEventListener('submit', validateForm);
window.addEventListener('keydown', checkIsHotKey);