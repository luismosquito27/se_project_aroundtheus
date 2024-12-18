import Popup from "./Popup.js";

export default class popUpWithImage extends Popup {
  constructor({ popupSelector, handleFormImage }) {
    this._popupForm = this._popupImage.querySelector(".modal__image");
    this._popupCaption = this._popupImage.querySelector(".modal__caption");
    this._handleFormImage = handleFormImage;
  }

  handleFormImage(name, link) {
    this._handleFormImage.src = link;
    this._handleFormImage.alt = name;
    this._popupCaption.textContent = name;
    super.open();
  }
}
