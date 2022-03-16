var button_catalog = document.querySelector('.navigation-catalog-link');
var popover_catalog = document.querySelector('.popover-catalog');
var button_search = document.querySelector('.navigation-link-search');
var popover_search = document.querySelector('.popover-search');
var button_log_in = document.querySelector('.navigation-link-log-in');
var popover_log_in = document.querySelector('.popover-log-in');
var button_basket_empty = document.querySelector('.navigation-link-basket');
var popover_basket_empty = document.querySelector('.popover-basket-empty');
var button_basket_full = document.querySelector('.navigation-link-basket');
var popover_basket_full = document.querySelector('.popover-basket-full');
var button_modal = document.querySelector('.button-submite-contacts');
var modal_feedback = document.querySelector('.modal-container');
var button_modal_close = document.querySelector('.modal-close-button');
var modal_feedback = document.querySelector('.modal-container');


button_catalog.addEventListener('click', function() {
  popover_catalog.classList.toggle('popover-catalog-off');
});

button_search.addEventListener('click', function() {
  popover_search.classList.toggle('popover-search-off');
});

button_log_in.addEventListener('click', function() {
  popover_log_in.classList.toggle('popover-log-in-off');
});

button_basket_empty.addEventListener('click', function() {
  popover_basket_empty.classList.toggle('popover-basket-empty-off');
});


button_basket_full.addEventListener('click', function() {
  popover_basket_full.classList.toggle('popover-basket-full-off');
});

button_modal.addEventListener('click', function() {
  modal_feedback.classList.toggle('modal-close');
});

button_modal_close.addEventListener('click', function() {
  modal_feedback.classList.toggle('modal-close');
});


