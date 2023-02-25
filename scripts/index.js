
const popupElement = document.querySelector('.popup');

const popupEditOpen = document.querySelector('.profile__edit-button')
const popupEdit = document.querySelector('.popup__type_edit')

const popupAddOpen = document.querySelector('.profile__add-button')
const popupAdd = document.querySelector('.popup__type_add')

const popupSubmit = document.querySelector('.popup__submit');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

const formEdit = document.querySelector('.form__type_edit');
const formAdd = document.querySelector('.form__type_add')

const nameInput = formEdit.querySelector('.popup__input_type_name');
const jobInput = formEdit.querySelector('.popup__input_type_des');

const cardName = formAdd.querySelector('.popup__input_type_name-card')
const cardLink = formAdd.querySelector('.popup__input_type_link-card')

const cardTemplate = document.querySelector('#place-template').content
const cardList = document.querySelector('.places__list')

const closeButtons = document.querySelectorAll('.popup__close-button');


const openPopup = function(popupElement) {
  popupElement.classList.add('popup_is-opened');
}

const closePopup = function(popupElement) {
  popupElement.classList.remove('popup_is-opened');
}
 

closeButtons.forEach((button) => {
  const popupElement = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popupElement));
});


function handleFormSubmit (evt) {
  evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    formEdit.reset()
    closePopup(popupEdit)
}


const createCard = (card) =>  {
  const cardElement = cardTemplate.querySelector('.place').cloneNode(true)

  const cardLike = cardElement.querySelector('.place__like')
  const deleteBtn = cardElement.querySelector('.place__del')

  cardElement.querySelector('.place__text').textContent = card.name
  cardElement.querySelector('.place__text').alt = card.name
  cardElement.querySelector('.place__image').src = card.link

  
  deleteBtn.addEventListener('click', () => {
    cardElement.remove();
  });

  
  cardLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('place__like_active');
  });

 
  cardElement.querySelector('.place__image').addEventListener('click', (evt) => {
    
    const imageZoom = document.querySelector('.popup__image')
    const imageCap = document.querySelector('.popup__image-cap') 
    const popupImage = document.querySelector('.popup__type_zoom')

    imageZoom.src = evt.target.src
    imageCap.textContent = card.name

    openPopup(popupImage)
  })

  return cardElement
}

  const addCardFormSubmit = (evt) => {
    evt.preventDefault()

    const newCard = {name: cardName.value, link: cardLink.value}
    cardList.prepend(createCard(newCard))
    formAdd.reset()
    
    closePopup(popupAdd)
  }

  
  const renderCard = (card) => {
    cardList.append(createCard(card))
  }

  initialCards.forEach((item) => {
    renderCard(item)
  })


popupEditOpen.addEventListener('click', () => openPopup(popupEdit))
popupAddOpen.addEventListener('click', () => openPopup(popupAdd))

formAdd.addEventListener('submit', addCardFormSubmit)
formEdit.addEventListener('submit', handleFormSubmit);

  

  







 
 
