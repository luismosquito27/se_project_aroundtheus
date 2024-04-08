//error class for edit modal
function showInputError(
  formElement,
  inputEl,
  errorMessage,
  { inputErrorClass, errorClass }
) {
  const errorElementId = `#${inputEl.id}-error`;
  const errorMessageEl = formElement.querySelector(errorElementId);

  inputEl.classList.add(inputErrorClass);
  errorMessageEl.classList.add(errorClass);
  errorMessageEl.textContent = errorMessage;
}

function checkInputValidity(formElement, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formElement, inputEl, inputEl.validationMessage, options);
    return false;
  } else {
    hideInputError(formElement, inputEl, options);
    return true;
  }
}

// hide the error message
function hideInputError(formElement, inputEl, { inputErrorClass, errorClass }) {
  const errorElementId = `#${inputEl.id}-error`;
  console.log(errorElementId);
  const errorMessageEl = formElement.querySelector(errorElementId);

  console.log(inputErrorClass);
  inputEl.classList.remove(inputErrorClass);
  errorMessageEl.classList.remove(errorClass);
  errorMessageEl.textContent = "";
}

function hasInvalidInput(inputEl) {
  toggleButtonState(formElement, inputEl, option);
  return !hasInvalidInput.every((inputEl) => inputEl.validity.valid);
}

//disable
function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputEls = [...formElement.querySelectorAll(inputSelector)];
  toggleButtonState(formElement, inputEls, options);

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputEl, options);
      toggleButtonState(formElement, inputEls, options);
      hasInvalidInput(formElement, inputEl, options);
    });
  });
}

//calling the add modal disable
function toggleButtonState(formElement, inputEls, options) {
  console.log(formElement, inputEls, options);

  const button = formElement.querySelector(options.submitButtonSelector);
  const hasInvalidInput = inputEls.every(
    (
      inputEl // reuse hasInvalidInput
    ) => checkInputValidity(formElement, inputEl, options)
  );
  if (hasInvalidInput) {
    button.classList.remove(options.inactiveButtonClass);
    return (button.disabled = false);
  } else {
    button.classList.add(options.inactiveButtonClass);
    button.disabled = true;
  }
}

const enableValidation = (options) => {
  const formElements = [...document.querySelectorAll(options.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    console.log(formElements);

    setEventListeners(formElement, options);
  });
};

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  inputErrorClass: "modal__input-error",
  errorClass: "modal__error",
  //disable button
  inactiveButtonClass: "modal__disabled",
  // submit button
  submitButtonSelector: ".modal__input-button",
};

enableValidation(config);
