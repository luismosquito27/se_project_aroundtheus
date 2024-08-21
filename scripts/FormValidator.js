class FormValidatorObj {
  constructor(settings, formSelector) {
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
    console.log(this._inputEls, this._formElement, this._options);

    if (!this._hasInvalidInput()) {
      this._button.classList.remove(this._options._inactiveButtonClass);
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

  _checkInvalidValidity() {
    if (!this._showInputError()) { 
     
    }
  }

  _setEventListeners() {
    this._inputEls = [...formElement.querySelectorAll(this._inputSelector)];
    this._button = formElement.querySelector(
      this._options.submitButtonSelector
    );

    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(formElement, inputEl, options);
        toggleButtonState(formElement, inputEls, options);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formElement, options);
  }
}

export default FormValidatorObj;
