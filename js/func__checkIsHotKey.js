'use strict';

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