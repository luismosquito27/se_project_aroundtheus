import Popup from "../scripts/Popup.js";

class popupWithForm extends Popup {
  contructor({ popupSelector, handleFormSubmit }) {}
}

// we need to pass it thru the parent constructor

//index.js

const newCardPopup = new poppupWithForm("#new-card-popup", () => {
  // do I need to make one for each card ?
});

newCardPopup.open();

newCardPopup.close();
