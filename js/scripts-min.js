var link=document.querySelector(".search-hotel__btn");var form=document.querySelector("form");link.addEventListener('click',showForm);form.addEventListener("submit",function(evt){evt.preventDefault()})
function showForm(e){var popup=document.querySelector('.popup__search');var date=popup.querySelector(".search-hotel__input");e.preventDefault();if(popup.classList.contains('open')){popup.classList.remove('open')}else{popup.classList.add('open')
date.focus()}}
