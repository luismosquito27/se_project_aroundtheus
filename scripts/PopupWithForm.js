import Popup from "../scripts/Popup.js";

class popupWithForm extends Popup 
  contructor(popupSelector, handleFormSubmit ) {
     super({ popupSelector }) { 
     this.popupElement.querySelector(".modal__form");
     this.handleFormSubmit = handleFormSubmit; 
  }

  close() { 
   this._popupForm.reset()
   super.close(); 
  }
}

// we need to pass it thru the parent constructor
