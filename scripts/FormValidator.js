class FormValidator {
  constructor(settings, formSelector) {
    this._settings = settings;
    this._inputSelector = settings.inputSelector;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    //disable button
    this._inactiveButtonClass = settings.inactiveButtonClass;
    // submit button
    this._submitButtonSelector = settings.submitButtonSelector;

    this._form = formSelector;
    console.log(this);
  }
  // ERROR VALIDATION
  _showInputError(inputEl) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);

    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.classList.add(this._errorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
  }

  _hideInputError(inputEl) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);

    inputEl.classList.remove(this._inputErrorClass);
    errorMessageEl.classList.remove(this._errorClass);
    errorMessageEl.textContent = "";
  }

  //we are calling the button from validation.
  _toggleButtonState() {
    if (!this._hasInvalidInput()) {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    } else {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    }
  }

  // declare a method disableButton
  disabledButtonState() {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.disabled = true;
  }

  _setEventListeners() {
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener(inputEl, () => {
        this._toggleButtonState();
      });
    });
  }

  _hasInvalidInput() {
    return this._inputEls.some((inputEl) => !inputEl.validity.valid);
  }

  _checkInvalidValidity(inputEl) {
    console.log(7777);
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl);
    } else {
      this._hideInputError(inputEl);
    }
  }

  _setEventListeners() {
    console.log(9999);
    this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    this._button = this._form.querySelector(this._submitButtonSelector);

    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInvalidValidity(inputEl);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    this._setEventListeners();
  }
}

export default FormValidator;
