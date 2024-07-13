//check line 41
// they want you to duplicate code but will be fixed in the next sprint
//pass popup handler

class Card {
  constructor(cardData, cardSelector) {
    //wants you to pass in cardSelector and then clone it //
    this._name = cardData.name;
    this._link = cardData.link;

    this._card = this.cardSelector;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeIcon);

    this._element
      .querySelector(".card__image")
      .addEventListener("click", this._handlePreviewPicture);

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", this_handleDeleteCard);
  }

  _handleLikeIcon() {
    console.log(this);
    this._element
      .querySelector(".card__like-button")
      .classList.toggle(".card__like-button_active");
  }

  _handleDeleteCard() {}

  _handlePreviewPicture() {
    this._element;
    this.previewModalImage.src = this.cardData.link;
    this.previewModalImage.alt = this.cardData.name;
    this.modalCaption.textContent = this.cardData.name;
    openModal(previewModal);

    //rewrite in this.
    // previewModalImage.src = cardData.link;
    // previewModalImage.alt = cardData.name;
    // modalCaption.textContent = cardData.name;
    // openModal(previewModal);
  }

  _getTemplate() {
    return document
      .querySelector(this.cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._cardSelector();
    this._setEventListeners();
  }
}

export default Card;
