"use strict";

window.dateNow = new Date();
window.dateFull = dateNow.toISOString();
window.dateShort = dateFull.match(/\d{4}-\d{2}-\d{2}/);
document.querySelector('input[type="date"]').value = dateShort;
