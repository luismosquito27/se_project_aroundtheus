import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._previewImage = this._popupElement.querySelector(".modal__image");
    this._previewCaption = this._popupElement.querySelector(".modal__caption");
  }

  // _handleFormImage({ name, link }) {
  //   console.log(name, link);
  //   this._handleFormImage.src = link;
  //   this._handleFormImage.alt = name;
  //   this._popupCaption.textContent = name;
  //   super.open();
  // }

  open({ name, link }) {
    this._previewImage.src = link;
    this._previewImage.alt = name;
    this._previewCaption.textContent = name;
    super.open();
  }
}
