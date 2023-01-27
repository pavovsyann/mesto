const popupElement = document.querySelector('.popup');
const popupCloseButton = popupElement.querySelector('.popup__close-button');
const popupOpenButton = document.querySelector('.profile__edit-button')
const popupSubmit = popupElement.querySelector('popup__submit');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__input_user_name');
let jobInput = popupElement.querySelector('.popup__input_user_des');


const openPopup = function() {
  popupElement.classList.add('popup_is-opened');
}

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}


function handleFormSubmit (evt) {
  evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup()
}

formElement.addEventListener('submit', handleFormSubmit);


function openSubmit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup()
}

popupOpenButton.addEventListener('click', openSubmit)

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);


