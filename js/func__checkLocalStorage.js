"use strict";

window.checkLocalStorage = function (evt) {
	if (storage) {
		window.modalLoginLoginInput.value = window.storage;
		window.modalLoginPasswordInput.focus();
	} else {
		window.modalLoginLoginInput.focus();
	}
};
