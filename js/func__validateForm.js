"use strict";

window.validateForm = function (evt) {
	if (
		!window.modalLoginLoginInput.value ||
		!window.modalLoginPasswordInput.value
	) {
		evt.preventDefault();
		window.modalLogin.classList.remove("modal-error-animation");
		window.modalLogin.scrollLeft = modalLogin.scrollLeft;
		window.modalLogin.classList.add("modal-error-animation");
		setTimeout(() => {
			window.modalLogin.classList.remove("modal-error-animation");
			window.modalLogin.classList.remove("modal-show-animation");
		}, 500);
	} else {
		if (window.isStorageSupport) {
			window.localStorage.setItem("login", window.modalLoginLoginInput.value);
		}
	}
};
