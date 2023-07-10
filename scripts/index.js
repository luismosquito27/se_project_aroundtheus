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

const profileTitle = document.querySelector(".profile__title");
const profileTitleInput = document.querySelector(".modal__form-title");
const profileDescription = document.querySelector(".profile__description");
const profileDescriptionInput = document.querySelector(
  ".modal__form-description"
);
const cardListEl = document.querySelector(".cards__list-content");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  return cardElement;
}
/* ---------------------------- js.modal ----------------------------- */
/* ---------------------------- js.modal ----------------------------- */

const profileEditModal = document.querySelector("#profile-edit-modal");
const profileModalCloseButton = profileEditModal.querySelector(
  "#modal-close-button"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileEditButton = document.querySelector(".profile__edit-button");
const modalFormButton = document.querySelector(".modal__form-button");

modalFormButton.addEventListener("Submit", () => {
  submit();
});

function profileFormSubmitHandler(e) {
  e.preventDefault();

  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
}
function closePopup() {
  profileEditModal.classList.add(".modal-close");
}

profileModalCloseButton.addEventListener("click", () => {
  closePopup();
});
profileEditForm.addEventListener("submit", (e) => {
  profileFormSubmitHandler(e);
  closePopup();
});

/* ----------------------------   ------------------------------ */
/* ----------------------------   ------------------------------ */

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}
function openPopup() {
  profileEditModal.classList.add("modal_opened");
}

profileEditButton.addEventListener("click", () => {
  openPopup();
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
