class Card {
  constructor(cardData, cardSelector) {
    //wants you to pass in cardSelector and then clone it //
    this._name = cardData.name;
    this._link = cardData.link;

    this._card = this.cardSelector; 
  }

  _setEventListeners() { 

  }

  _handleLikeIcon() { 

  }

  _handleDeleteCard() {
     
  }

  _handlePreviewPictures() { 
    
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
