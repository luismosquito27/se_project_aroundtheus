 
modal.addEventListener("click", function (e) {
  if (modal.classList.contains(".modal") || ... ) { }
    modal.classList.remove("modal_open");
    // modal.classList.add("modal__close");
  }
  console.log("click");
});

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
// calling the disabled / enabled button
function toggleButtonState(formElement, inputEls, options) {
  console.log(formElement, inputEls, options);
  const button = formElement.querySelector(".modal__input-button");
  const hasValidInput = inputEls.every((inputEl) =>
    checkInputValidity(formElement, inputEl, options.inactiveButtonClass)
  );
  if (hasValidInput) {
    button.classList.remove(options.inactiveButtonClass);
  } else {
    button.classList.add(options.inactiveButtonClass);
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
  inputErrorClass: ".modal__false",
  errorClass: ".modal__error",
  //disable class
  inactiveButtonClass: "modal__disabled",
  // popup class
  submitButtonSelector: ".modal__popup_selector",
};

enableValidation(config);
