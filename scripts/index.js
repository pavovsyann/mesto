const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup');

const popupCloseButton = popupEdit.querySelector('.popup__close-button');
const popupOpenButton = document.querySelector('.profile__edit-button')
const popupSubmit = popupEdit.querySelector('popup__submit');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let formElement = popupEdit.querySelector('.popup__form');
let nameInput = popupEdit.querySelector('.popup__input_user_name');
let jobInput = popupEdit.querySelector('.popup__input_user_des');


const openPopup = function() {
  popupEdit.classList.add('popup_is-opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
debugger
}

const closePopup = function() {
  popupEdit.classList.remove('popup_is-opened');
}


function handleFormSubmit (evt) {
  evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup()
}

formElement.addEventListener('submit', handleFormSubmit);


popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const photoGrid = document.querySelector('.photo-grid__list')
const cardTemplate = document.querySelector('#card-template')





const createCard = () => {

const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

const cardElement = cardTemplate.cloneNode(true);

}




const btnDel = document.querySelector('.card__btn_action_del')
