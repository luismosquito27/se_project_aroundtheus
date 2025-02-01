import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._previewImage = this._popupElement.querySelector(".modal__image");
    this._previewCaption = this._popupElement.querySelector(".modal__caption");
  }

  open({ name, link }) {
    this._previewImage.src = link;
    this._previewImage.alt = name;
    this._previewCaption.textContent = name;
    super.setEventListeners();
    super.open();
  }
}
