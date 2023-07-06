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
console.log(initialCards);

/* -------------------------- elements ----------------------------*/
/* -------------------------- elements ----------------------------*/

const profileTitle = document.querySelector(".profile-title-input");
const profileTitleInput = document.querySelector(".modal__form-title");
const profileDescription = document.querySelector(".profile__description");
const profileDescriptionInput = document.querySelector(
  ".modal__form-description"
);

/* ---------------------------- js.modal ----------------------------- */
/* ---------------------------- js.modal ----------------------------- */

const profileEditModal = document.querySelector("#profile-edit-modal");
const modalCloseButton = document.querySelector("#modal-close-button");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileEditButton = document.querySelector(".profile__edit-button");

modalCloseButton.addEventListener("click", () => {
  console.log(123);
  closePopop();
});
profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  profileEditModal.classList.remove(".modal-close-button");
});

/* ----------------------------   ------------------------------ */
/* ----------------------------   ------------------------------ */

function closePopop() {
  profileEditModal.classList.remove("modal_opened");
}
function openPopop() {
  profileEditModal.classList.add("modal_opened");
}

profileEditButton.addEventListener("click", () => {
  console.log(123);
  openPopop();
});
