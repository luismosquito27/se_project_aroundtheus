import Api from "../components/Api.js";
import FormValidator from "../components/FormValidator.js";
import { settings } from "../utils/constants.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
console.log("refresh");
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
  console.log(name, about);
  userProfile.setUserInfo({ name: name, about: about });
}
// add card modal
function handleAddModalSubmit(cardData) {
  console.log(cardData);
  section.addItem(createCard(cardData));
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

/* ---------------------------- -------------------------- */
/* ----------------------------   ----------------------------- */

function handlePopupPreview(data) {
  popupWithImage.open(data);
}

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handlePopupPreview);
  return card.getView(); // returns html, now the whole, just part
}

// section.renderItems();

// ------------ // instances // ------------//
// ------------ // instances // ------------//

// creating an instance of the PopWithImage
const popupWithImage = new PopupWithImage("#modal-image-preview");
popupWithImage.setEventListeners();

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

// creating an instance of the UserInfo
const userProfile = new UserInfo({
  profileTitle: "#profile-title",
  profileDescription: "#profile-description",
});

profileEditButton.addEventListener("click", () => {
  const { name, about } = userProfile.getUserInfo();
  descriptionInput.value = about;
  nameInput.value = name;
  editCardPopup.open();
});

// add modal
addButton.addEventListener("click", () => {
  addCardPopup.open();
});

// ------------ //  // ------------------------//
// ------------ //   // -----------------------//

// ------------ // api section  // ------------//
// ------------ // api section  // ------------//

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "e6143fd4-f56b-4cb2-8a6c-29d5af977c18",
    "Content-Type": "application/json",
  },
});

//render each card just like you have it on api.js
const section = new Section(
  {
    items: [],
    renderer: (item) => {
      const newCard = createCard(item);
      section.addItem(newCard);
    },
  },
  "#cards_list_content"
);

api
  .getInitialCards()
  .then((res) => {
    res.forEach((item) => section.addItem(createCard(item)));
  })
  .catch((err) => {
    console.error("Failed to load cards:", err);
  });

const deleteUrl =
  "https://around-api.en.tripleten-services.com/v1/cards/e6143fd4-f56b-4cb2-8a6c-29d5af977c18";
fetch(deleteUrl, {
  method: "DELETE",
  headers: {
    authorization: "e6143fd4-f56b-4cb2-8a6c-29d5af977c18",
    "Content-Type": "application/json",
  },
}).then((res) => {
  if (!res.ok) throw new Error("Failed to delete card");
  return res.json();
});

// avatar
// fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
//   headers: {
//     authorization: "e6143fd4-f56b-4cb2-8a6c-29d5af977c18",
//     "Content-Type": "application/json",
//   }

// don't forget to run "npm run dev" in the terminal to
// check your website
