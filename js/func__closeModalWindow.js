'use strict';

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
