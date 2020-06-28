'use strict';

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