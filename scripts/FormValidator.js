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

  _showInputError(errorElementId, inputErrorClass) {
    const errorElementsId = `#${inputEl.id}-error`;
    const errorMessageEl = this._form.querySelector(errorElementsId);

    inputEl.classList.add(inputErrorClass);
    errorMessageEl.classList.add(errorClass);
    errorMessageEl.textContent = errorMessageEl;
  }

  _hideInputError(formElement, inputEl, { inputErrorClass, errorClass }) {
    const errorElementId = `#${inputEl.id}-error`;
    console.log(errorElementId);
    const errorMessageEl = formElement.querySelector(errorElementId);

    console.log(inputErrorClass);
    inputEl.classList.remove(inputErrorClass);
    errorMessageEl.classList.remove(errorClass);
    errorMessageEl.textContent = "";
  }

  //we are calling the button from validation.
  _toggleButtonState() {
    if (!this._hasInvalidInput()) {
      this._button.classList.remove(_inactiveButtonClass);
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
      this._showInputError(inputEl, options);
      return this._showInputError();
    }
    this._hideInputError(inputEl);
    return this._hideInputError();
  }

  _setEventListeners() {
    // formElement not defined: use this._form

    this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    this._button = this._form.querySelector(this._submitButtonSelector);

    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(inputEl);
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
