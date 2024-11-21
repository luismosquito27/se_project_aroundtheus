export default class Popup {
   constructor({ popupSelector }) {
    this.popupElement = document.querySelector(popupSelector);
  }

  // export the ESC eventListeners to here :
  export closeOnEsc(event) {
    if (event.key === "Escape") {
      const modal = document.querySelector(closeButtons);
      this._

    }
  }
  
  export handleOverlayClick(event) {
    if (Array.from(event.target.classList).includes("modal")) {
      closeModal(event.target);
    }
  }



  //refactoring the popup class




  //creating for different types of popup in the class

  BOTH OF THESE CLASSES NEEDED TO BE WORKED ON SEPERATELY. 
  // the profile edit 


  // modal edit profile 

  open() {
    // opens popup
  }

  close() {
    // close popup
  }

  _handleEscClose() {
    // listens for esc button
  }

  setEventListeners() {
    // sets Event Listeners
  }

}
