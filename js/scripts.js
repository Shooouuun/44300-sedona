var link = document.querySelector(".search-hotel__btn");
var form = document.querySelector(".form");
var popup = document.querySelector(".popup__search");
var date = popup.querySelector(".search-hotel__input");
var arrivalDate = popup.querySelector("[name = hotel-date-in-field]");
var departureDate = popup.querySelector("[name = hotel-date-out-field]");

link.addEventListener('click', showForm);

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
})

form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !dapertireDate.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  }
});

function showForm(e) {
  e.preventDefault();

  if (popup.classList.contains('open')) {
    popup.classList.remove('open')
  } else {
    popup.classList.add('open')
    date.focus();
  }
}
