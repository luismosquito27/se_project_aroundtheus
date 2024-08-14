//check line 41
// they want you to duplicate code but will be fixed in the next sprint
//pass popup handler

class Card {
  constructor(cardData, cardSelector) {
    //wants you to pass in cardSelector and then clone it //
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
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
      .addEventListener("click", this._handleDeleteCard);
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
  }

  getView() {
    this._element = this._getTemplate(this._cardSelector); 
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
   
    this._setEventListeners();

    return this._element;
  }
}

export default Card;
