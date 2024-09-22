class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this.name = cardData.name;
    this.link = cardData.link;
    this._cardSelector = cardSelector;

    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", () =>
      this._handleLikeIcon(this)
    );

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handleImageClick(this));

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteCard(this));
  }

  _handleLikeIcon() {
    this._cardLikeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  getView() {
    this._element = this._getTemplate(this._cardSelector);
    this._element.querySelector(".card__image").src = this.link;
    this._element.querySelector(".card__image").alt = this.name;
    this._element.querySelector(".card__title").textContent = this.name;

    this._cardLikeButton = this._element.querySelector(".card__like-button");

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
