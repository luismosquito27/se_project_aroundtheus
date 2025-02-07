import FormValidator from "../components/FormValidator.js";
import { settings } from "../utils/constants.js";
import { initialCards } from "../utils/constants.js";
import Card from "../components/Card.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";
import "../pages/index.css";
import PopupWithForm from "../scripts/PopupWithForm.js";

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
const previewModal = document.querySelector("#modal-image-preview");

const addButton = document.querySelector("#profile-add-button");
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
function handleProfileFormSubmit({ name, about }) {
  userProfile.setUserInfo({ name: name, about: about });
}
// add card modal
function handleAddModalSubmit(data) {
  renderCard(createCard(data));
  addModalForm.reset();
  addFormValidator.toggleButtonState();
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
  console.log("yo im clicking the dit button");
});

// need a parameter that stores the name and link
function handlePopupPreview(data) {
  console.log(123132310);
  // call popupWithImage class's open method
  // this.popupWithImage._handleFormImage(name, link);
  popupWithImage.open(data);
}

function createCard(cardData) {
  // pass handlePopupPreview to card class
  const card = new Card(cardData, "#card-template", handlePopupPreview);
  return card.getView();
}

function renderCard(cardElement, method = "prepend") {
  cardListEl[method](cardElement);
}

initialCards.forEach((cardData) => {
  renderCard(createCard(cardData));
});

// ------------ // instances // ------------//
// ------------ // instances // ------------//

// creating an instance of the PopWithImage
const popupWithImage = new PopupWithImage("#modal-image-preview");

const addCardPopup = new PopupWithForm(
  "#profile-add-modal",
  handleAddModalSubmit
);
addCardPopup.setEventListeners();

const editCardPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileFormSubmit
);
editCardPopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  editCardPopup.open();
});

addButton.addEventListener("click", () => {
  addCardPopup.open();
});
// creating an instance of the UserInfo
const userProfile = new UserInfo({
  profileTitle: "#profile-title",
  profileDescription: "#profile-description",
});
