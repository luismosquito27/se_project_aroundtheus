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

/* ---------------------------- js.modal button ----------------------------- */

/* ---------------------------- js.modal button ----------------------------- */

const profileEditModal = document.querySelector("#profile-edit-modal");
const modalCloseButton = document.querySelector("#modal-close-button");

profileEditModal.addEventListener("click", () => {
  console.log("Profile Edit Modal clicked");
  profileEditModal.classList.remove("modal");
});

modalCloseButton.addEventListener("click", () => {
  console.log("Modal Close Button clicked");
  modalCloseButton.classList.add("modal");
});

/* -------------------------- js.header ----------------------------*/

/* -------------------------- js.header ----------------------------*/

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

/* ------------------------- js.title -----------------------------*/
/* ------------------------- js.title -----------------------------*/

profileTitle.addEventListener("click", () => {
  console.log("Profile Title Clicked");
  profileTitle.classList.remove("profile-title-input");
});

profileTitleInput.addEventListener("click", () => {
  console.log("Profile Title Clicked");
  profileTitleInput.classList.add("profile-title-input");
});

/* ------------------------ js.description ------------------------*/
/* ------------------------ js.description ------------------------*/

profileDescription.addEventListener("click", () => {
  console.log("Profile Edit Description Clicked");
  profileDescription.classList.remove("profile-description-input");
});

profileDescriptionInput.addEventListener("click", () => {
  console.log("Profile Edit Description Clicked");
  profileDescriptionInput.classList.add("profile-description-input");
});
