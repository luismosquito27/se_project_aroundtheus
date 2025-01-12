import FormValidator from "../components/FormValidator.js";
import { settings } from "../utils/constants.js";
import Card from "../components/Card.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import "../pages/index.css";
import PopupWithForm from "./PopupWithForm.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

/* -------------------------- elements ----------------------------*/
/* -------------------------- elements ----------------------------*/

const profileEditModal = document.querySelector("#profile-edit-modal");
//adding image text caption
const modalCaption = document.querySelector(".modal__caption");

const profileCloseButton = document.querySelector("#modal-close-button");
const addCardModal = document.querySelector("#profile-add-modal");
const addModalCloseButton = addCardModal.querySelector(
  "#profile-modal-add-close-button"
);

// trash can
// const addButton = document.querySelector("#profile-add-button");
//
const cardsWrapEl = document.querySelector(".cards__list-content");
//
const addModalForm = addCardModal.querySelector("#add-form");
const profileEditForm = profileEditModal.querySelector("#profile-form");

const profileEditButton = document.querySelector(".profile__edit-button");
const addInputButton = document.querySelector(".modal__input-button");
const cardListEl = document.querySelector(".cards__list-content");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const nameInput = profileEditModal.querySelector(".modal__input-title");
const descriptionInput = profileEditModal.querySelector(
  ".modal__input-description"
);

// adding card
const titleInput = addCardModal.querySelector("#add-title");
console.log(1);
console.log(titleInput);
const inputLink = addCardModal.querySelector("#link-type");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* ---------------------------- handlers -------------------------- */
/* ---------------------------- handlers ----------------------------- */

//edit card modal
function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editModal); // creating an instance using the popup
}
// add card modal
function handleAddModalSubmit(e) {
  e.preventDefault();
  const cardData = {
    name: titleInput.value,
    link: inputLink.value,
  };

  renderCard(createCard(cardData));
  addModalForm.reset();
  addFormValidator.toggleButtonState();
  closeModal(addModal);
}

/* ---------------------------- Event Listeners -------------------------- */
/* ---------------------------- Event Listeners  ----------------------------- */

//closing all modals
const editModal = document.querySelector("#profile-edit-modal");
const addModal = document.querySelector("#profile-add-modal");
const editModalCloseBtn = editModal.querySelector(".modal__close");
const addModalCloseBtn = addModal.querySelector(".modal__close");

const cardSelector = "#card-template";

/* ---------------------------- Validation -------------------------- */
/* ---------------------------- Validation   ----------------------------- */

const editFormValidator = new FormValidator(settings, profileEditForm);
const addFormValidator = new FormValidator(settings, addModalForm);

addFormValidator.enableValidation();
editFormValidator.enableValidation();

// edit button for modal
profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
});

// add submit button for modal
function 
addButton.addEventListener("click", () => {
  previewModalImage.src = data.link;
  previewModalImage.alt = data.name;
  modalCaption.textContent = data.name;
});

// Missing handler for opening preview modal
function createCard(cardData) {
  const card = new Card(cardData, "#card-template");
  return card.getView();
}

function renderCard(cardElement, method = "prepend") {
  cardListEl[method](cardElement);
}

initialCards.forEach((cardData) => {
  renderCard(createCard(cardData));
});

// creating an instance of Popup
const popup = new Popup("#card-template");
popup.setEventListeners();

// creating an instance of the PopWithImage
const popupWithImage = new PopupWithImage("#modal-image-preview");
// calling the parent's eventListeners
popupWithImage.setEventListeners();

const addCardPopup = new PopupWithForm("#some-selector", handleAddModalSubmit);
addCardPopup.setEventListeners();

// creating an instance of the UserInfo
const userProfile = new UserInfo({
  profileTitle: "#profile-title",
  profileDescription: "#profile-description",
});

userProfile.setUserInfo({ name: "Jacques Cousteau", about: "Explorer" });
