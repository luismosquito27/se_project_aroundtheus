// enabling validation by calling enableValidation()
// pass all the settings on call

//error class for edit modal
function showInputError(formElement, inputEl, { inputErrorClass, errorClass }) {
  const errorElementId = `#${inputEl.id}-error`;
  const errorMessageEl = formElement.querySelector(errorElementId);
  inputEl.classList.add(inputErrorClass);
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classList.remove(errorClass);
}
function checkInputValidity(formElement, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formElement, inputEl, options);
  } else {
    hideInputError(formElement, inputEl, options);
  }
}

// hide the error message
function hideInputError(formElement, inputEl, { inputErrorClass, errorClass }) {
  const errorElementId = `#${inputEl.id}-error`;
  const errorMessageEl = formElement.querySelector(errorElementId);

  inputEl.classList.remove(inputErrorClass);
  errorMessageEl.classList.remove(errorClass);
  console.log(inputErrorClass);
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid);
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputEls = [...formElement.querySelectorAll(inputSelector)];
  const button = formElement.querySelector(".modal__input-button");

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputEl, options);
      toggleButtonState(inputEls, button);
    });
  });
}

const enableValidation = (options) => {
  const formElements = [...document.querySelectorAll(options.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    console.log(formElements);

    setEventListeners(formElement, options);
    // display error msg
    // disable button
    // of all inputs are valid
    // enable button
    // reset error messages
  });
};

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  inputErrorClass: ".modal__false",
  errorClass: ".modal__error",
  inactiveButtonClass: ".modal__input-button_disabled",
};

enableValidation(config);

// step 3:
// submitButtonSelector: "popup__button",
