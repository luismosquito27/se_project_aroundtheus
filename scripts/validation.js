// enabling validation by calling enableValidation()
// pass all the settings on call

//error class
function showInputError(formElement, inputEl, { inputErrorClass, errorClass }) {
  const errorMessageEl = formElement.querySelector(`#${inputEl.id}-error`);
  const getElementBy = formElement.querySelectorAll(`$input[type=text]`);
  inputEl.classList.add(inputErrorClass);
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classList.remove(errorClass);
  console.log(errorMessageEl);
}

function checkInputValidity(formElement, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formElement, inputEl, options);
  } else {
    hideInputError(formElement, inputEl, options);
  }
}

// hide the error message
function hideInputError(
  formElement,
  inputEl,
  { inputErrorClass, errorClass, aboutError }
) {
  const errorMessageEl = formElement.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorMessageEl.classList.remove(
    errorClass,
    aboutError,
    modalDescriptionError
  );
  console.log(inputErrorClass);
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid);
}

// disableButton

// enableButton

function toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
  if (hasInvalidInput(inputEls)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    return;
  }

  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputEls = [...formElement.querySelectorAll(inputSelector)];

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputEl, options);
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
    // look for all inputs inside form
    // loop thru all the inputs to see if all are valid
    // if input is not valid
    // we want to grab the validation msg
    // add error class to input
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
  inputErrorClass: "modal__description_type_error",
  errorClass: "modal__error",
};

enableValidation(config);

// step: 2
// submitButtonSelector: "popup__button",
//   inactiveButtonClass: "popup__button_disabled",
