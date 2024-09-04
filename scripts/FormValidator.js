class FormValidatorObj {
  constructor(settings, formSelector) {
    this._settings = settings;
    this._inputSelector = settings.inputSelector;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    //disable button
    this._inactiveButtonClass = settings._inactiveButtonClass;
    // submit button
    this._submitButtonSelector = settings._submitButtonSelector;

    this._form = formSelector;
    console.log(this);
  }

  _showInputError(inputEl, inputErrorClass, errorClass) {
    const errorMessageEl = formElement.querySelector(`#${inputEl.id}-error`);

    inputEl.classList.add(inputErrorClass);
    errorMessageEl.classList.add(errorClass);
    errorMessageEl.textContent = errorMessageEl;
  }

  _hideInputError(formElement, inputEl) {
    const errorMessageEl = formElement.querySelector(`#${inputEl.id}-error`);

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
      this._showInputError(inputEl, "errorElementId", "{ inputErrorClass }");
    } else {
      this._hideInputError(inputEl, "errorElementId", "{ inputErrorClass }");
    }
  }

  _setEventListeners() {
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

    this._setEventListeners(this._form, this._settings);
  }
}

export default FormValidatorObj;
