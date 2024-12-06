import Popup from "../scripts/Popup.js";

class popupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit ) {
     super({ popupSelector }) 
     this.popupElement.querySelector(".modal__form");
     this.handleFormSubmit = handleFormSubmit; 
  }

  close() { 
   this._popupForm.reset()
   super.close(); 
  }
 }

 