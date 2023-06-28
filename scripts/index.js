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

/* ---------------------------- Elements ----------------------------- */

/* ---------------------------- Elements ----------------------------- */

const profileEditButton = document.querySelector("#profile-edit-button");
const modalCloseButton = document.querySelector("#modal-close-button");

profileEditButton.addEventListener("click", () => {
  console.log("button click");
});

modalCloseButton.addEventListener("click", () => {
  console.log(123);
  // modalCloseButton.classList.add("modal__close");
});

profileEditButton.addEventListener("click", () => {
  console.log("button click");
});

profileEditButton.addEventListener("clikc", () => {
  console.log("modal__open");
});

// 1. Make all modal windows hidden by default. When user clicks on the button ->
// we open modal by adding the class: .modal.modal_opened (2nd class shows)

// 2. when user clicks on the modal cross icon = we delete the modal_opened class from modal,
// and after that inside the modal will; be only one class = .modal
