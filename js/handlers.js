'use strict';

mapLinks[0].addEventListener('click', function () { showModalWidow.call(event, event, window.modalMap) });
mapLinks[1].addEventListener('click', function () { showModalWidow.call(event, event, window.modalMap) });
modalMapCloseBTN.addEventListener('click', closeModalWindow);
modalMapImg.addEventListener('click', addMap);
loginLink.addEventListener('click', function () { showModalWidow.call(event, event, window.modalLogin) });
modalLoginCloseBTN.addEventListener('click', closeModalWindow);
modalLoginForm.addEventListener('submit', validateForm);
window.addEventListener('keydown', checkIsHotKey);