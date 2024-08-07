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

  // - figure it out on your own - //
  //we are calling the button from validation but not like this.
  _toggleButtonState() {
    this._element;
    querySelector(options.submitButtonSelector);
    classList.remove(options.inactiveButtonClass);
  }
  //     const button = formElement.querySelector(options.submitButtonSelector);
  //     if (!hasInvalidInput(inputEls)) {
  //       button.classList.remove(options.inactiveButtonClass);
  //       button.disabled = false;
  //     } else {
  //       console.log("disabled");
  //       button.classList.add(options.inactiveButtonClass);
  //       button.disabled = true;
  //     }
  //   }

  _hasInvalidInput() {}

  _checkInvalidValidity() {}

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
