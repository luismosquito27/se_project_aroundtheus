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

// trash can
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

// adding card
const titleInput = profileAddModal.querySelector(".modal__input_type-title");
const inputLink = profileAddModal.querySelector(".modal__input_type-link");

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
  const previewModal = document.querySelector("#modal__image-preview");
  const modalImageContainer = previewModal.querySelector(
    ".modal__image-container"
  );
  const previewModalImage = previewModal.querySelector(".modal__image");
  // close button for preview image
  const previewModalCloseButton = modalImageContainer.querySelector(
    "#modal-close-button"
  );

  // adding image preview
  cardImageEl.addEventListener("click", () => {
    previewModalImage.src = cardData.link;
    previewModalImage.alt = cardData.name;
    cardTitleEl.textContent = cardData.name;

    openModal(modalImageContainer);
  });

  previewModalCloseButton.addEventListener("click", () => {
    closeModal(previewModalCloseButton);
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

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(profileModalCloseButton);
}

// adding card
function handleAddModalSubmit(e) {
  e.preventDefault();
  const cardData = {
    name: titleInput.value,
    link: inputLink.value,
  };
  const cardElement = getCardElement(cardData);
  cardsWrapEl.prepend(cardElement);
  closeModal(profileAddModal);
}

modalFormButton.addEventListener("submit", () => {
  closeModal(profileAddModal);
});

function closeModal(modal) {
  modal.classList.remove("modal_add_opened");
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

profileModalCloseButton.addEventListener("click", () => {
  closeModal(profileEditModal);
});

profileEditForm.addEventListener("submit", (e) => {
  handleProfileFormSubmit(e);
});

/////////           ////////////          ////////
// add modal
profileAddCloseModal.addEventListener("click", () => {
  closeModal(profileAddModal);
});

profileAddButton.addEventListener("click", () => {
  openModal(profileAddModal);
});

profileAddModalForm.addEventListener("submit", (e) => {
  handleAddModalSubmit(e);
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
