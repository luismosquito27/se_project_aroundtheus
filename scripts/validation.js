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
    return false;
  } else {
    hideInputError(formElement, inputEl, options);
    return true;
  }
}

// hide the error message
function hideInputError(formElement, inputEl, { inputErrorClass, errorClass }) {
  const errorElementId = `#${inputEl.id}-error`;
  const errorMessageEl = formElement.querySelector(errorElementId);

  inputEl.classList.remove(inputErrorClass);
  errorMessageEl.classList.remove(errorClass);
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid);
}

//disable
function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputEls = [...formElement.querySelectorAll(inputSelector)];

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputEl, options);
      toggleButtonState(formElement, inputEls, options);
    });
  });
}
// calling the disable button
function toggleButtonState(formElement, inputEls, options, errorClass) {
  const button = formElement.querySelector(".modal__input-button");
  const hasValidInput = inputEls.every((inputEl) =>
    checkInputValidity(formElement, inputEl, options.inactiveButtonClass)
  );
  if (hasValidInput) button.classList.remove(options.inactiveButtonClass);
  button.classList.add((options.inactiveButtonClass = !hasValidInput));
}

const enableValidation = (options) => {
  const formElements = [...document.querySelectorAll(options.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    console.log(formElements);

    setEventListeners(formElement, options);
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
  inactiveButtonClass: ".modal__disabled",
};

enableValidation(config);
// submitButtonSelector: ".modal__submit",