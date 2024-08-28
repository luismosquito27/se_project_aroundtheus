class Card {
  constructor(cardData, cardSelector) {
    //wants you to pass in cardSelector and then clone it //
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;

    // this.cardData = data;

    this._
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
      .addEventListener("click", () => this._handleLikeIcon.bind(this));

    this._element
      .querySelector(".card__image")
      .addEventListener("click", this._handlePopupHandler.bind(this));

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", this._handleDeleteCard.bind(this));
  }

  _handleLikeIcon() {
    console.log(this);
    this._element
      .querySelector(".card__like-button")
      .classList.toggle(".card__like-button_active");
  }

  _handleDeleteCard() {
    this._element.querySelector(".card");
    classList.toggle(cardData);
  }

  _handlePopupHandler() {
    if (!this.cardData) {
    }

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
