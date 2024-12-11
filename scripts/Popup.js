export default class Popup {
  constructor({ popupSelector }) {
    this.popupElement = document.querySelector(popupSelector);
  }

  //ESC key
  closeOnEsc(event) {
    if (event.key === "Escape") {
      close();
    }
  }
}

//refactoring the popup class
class Popup {
  constructor() {
    this.modal = document.querySelector(".modal");
  }

  //creating for different types of popup in the class
  // BOTH OF THESE CLASSES NEEDED TO BE WORKED ON SEPERATELY.

  // modal edit profile


  // modal add profile

  openModal() {
    // opens popup
  }

  closeButtons() {
    // close popup
  }

  _handleOverlayClick(event) {
    // listens for esc button
    if (Array.from(event.target.classList).includes("modal")) {
      close();
    }

    setEventListeners();
    {
      // set up event listener for on key press
      // fire closeOnEsc no matter what the key is
      document.addEventListener("keydown", closeOnEsc);
      document.addEventListener("escape", handleOverlayClick);

      // do I add the remove Listeners too ? 
    }
  }
}
