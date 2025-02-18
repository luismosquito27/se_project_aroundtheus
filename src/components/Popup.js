export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  //ESC key
  _closeOnEsc = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._closeOnEsc);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._closeOnEsc);
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (e) => {
      if (
        e.target.classList.contains("modal_opened") ||
        e.target.classList.contains("modal__close")
      ) {
        this.close();
      }
    });
  }
}
