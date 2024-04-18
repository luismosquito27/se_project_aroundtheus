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

const previewModalImage = document.querySelector(".modal__image");
// adding image preview
const profileEditModal = document.querySelector("#profile-edit-modal");
//adding image text caption
const modalCaption = document.querySelector(".modal__caption");

const profileCloseButton = document.querySelector("#modal-close-button");
const addCardModal = document.querySelector("#profile-add-modal");
const addModalCloseButton = addCardModal.querySelector(
  "#profile-modal-add-close-button"
);

// trash can
const addButton = document.querySelector("#profile-add-button");

const cardsWrapEl = document.querySelector(".cards__list-content");
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

/* ---------------------------- functions -------------------------- */
/* ---------------------------- functions ----------------------------- */

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  // adding image preview
  cardImageEl.addEventListener("click", () => {
    previewModalImage.src = cardData.link;
    previewModalImage.alt = cardData.name;
    modalCaption.textContent = cardData.name;

    openModal(previewModal);
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;

  return cardElement;
}

/* ---------------------------- handlers -------------------------- */
/* ---------------------------- handlers ----------------------------- */

//edit card modal
function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editModal);
}
// add card modal
function handleAddModalSubmit(e) {
  e.preventDefault();
  const cardData = {
    name: titleInput.value,
    link: inputLink.value,
  };
  const cardElement = getCardElement(cardData);
  cardsWrapEl.prepend(cardElement);
  e.target.reset();
  closeModal(addModal);
}

/* ---------------------------- Event Listeners -------------------------- */
/* ---------------------------- Event Listeners  ----------------------------- */

//closing all modals
const editModal = document.querySelector("#profile-edit-modal");
const addModal = document.querySelector("#profile-add-modal");
const editModalCloseBtn = editModal.querySelector(".modal__close");
const addModalCloseBtn = addModal.querySelector(".modal__close");
// image preview
const previewModal = document.querySelector("#modal-image-preview");
const previewModalCloseButton = previewModal.querySelector(
  "#modal-close-button-preview"
);

previewModalCloseButton.addEventListener("click", () => {
  closeModal(previewModal);
});

editModalCloseBtn.addEventListener("click", () => {
  closeModal(editModal);
});

addModalCloseBtn.addEventListener("click", () => {
  closeModal(addModal);
});

function openModal(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("click", handleOverlayClick);

  const closeButton = modal.querySelector(".modal__close");
  closeButton.addEventListener("click", () => closeModal(modal));
  document.addEventListener("keydown", closeOnEsc);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("click", handleOverlayClick);

  const closeButton = modal.querySelector(".modal__close");
  closeButton.removeEventListener("click", () => closeModal(modal));
  document.removeEventListener("keydown", closeOnEsc);
}

//ESC key
function closeOnEsc(event) {
  if (event.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closeModal(modal);
  }
}

function handleOverlayClick(event) {
  if (Array.from(event.target.classList).includes("modal")) {
    closeModal(event.target);
  }
}

// edit button for modal
profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileFormSubmit);

//add button for modal
addButton.addEventListener("click", () => {
  openModal(addCardModal);
});

addModalForm.addEventListener("submit", handleAddModalSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
