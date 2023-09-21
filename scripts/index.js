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
const profileModalCloseButton = profileEditModal.querySelector(
  "#modal-close-button"
);

const profileAddButton = document.querySelector("#profile-add-button");
const profileAddModal = document.querySelector(".modal__add_profile");
const profileAddCloseModal = profileAddModal.querySelector(
  "#modal-close-button"
);
const cardsWrapEl = document.querySelector(".cards__list-content");
const profileAddModalForm = profileAddModal.querySelector(".modal__form");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileEditButton = document.querySelector(".profile__edit-button");
const modalFormButton = document.querySelector(".modal__input-button");
const cardListEl = document.querySelector(".cards__list-content");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const nameInput = profileEditModal.querySelector(".modal__input-title");
const descriptionInput = profileEditModal.querySelector(
  ".modal__input-description"
);

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* ---------------------------- functions -------------------------- */
/* ---------------------------- functions ----------------------------- */

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;

  return cardElement;
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
}

function handleAddModal(e) {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  console.log("test");
}

function closeModal(modal) {
  modal.classList.remove("modal_add_opened");
}

function renderCard(cardData, cardsWrapEl) {
  const cardElement = getCardElement(cardData);
  cardsWrapEl.prepend(cardElement);
}

function openModal(modal) {
  modal.classList.add("modal_add_opened");
}

/* ---------------------------- Event Listeners -------------------------- */
/* ---------------------------- Event Listeners  ----------------------------- */

// edit modal
profileEditButton.addEventListener("click", () => {
  openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", (e) => {
  handleProfileFormSubmit(e);
  closeModal();
});

////
// add modal
profileAddCloseModal.addEventListener("click", () => {
  closeModal(profileAddModal);
});

profileAddButton.addEventListener("click", () => {
  openModal(profileAddModal);
});

profileModalCloseButton.addEventListener("click", () => {
  closeModal(profileEditModal);
});

profileAddModalForm.addEventListener("submit", (e) => {
  handleAddModal(e);
  closeModal(profileAddModal);
});
/////
//

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
