import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector(".modal__image");
    this._popupCaption = this._popup.querySelector(".modal__caption");
  }

  _handleFormImage(name, link) {
    this._handleFormImage.src = link;
    this._handleFormImage.alt = name;
    this._popupCaption.textContent = name;
    super.open();
  }
}
