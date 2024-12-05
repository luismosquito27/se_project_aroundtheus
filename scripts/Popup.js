export default class Popup {
   constructor({ popupSelector }) {
    this.popupElement = document.querySelector(popupSelector);
  }

  // export the ESC eventListeners to here :
class EscListener {
    static closeOnEsc(event) {
      const modal = document.querySelector(closeButtons);
      this.closeModal(modal); 

  }
}

 handleOverlayClick(event) {
    if (Array.from(event.target.classList).includes("modal")) {
      this.closeModal(event.target);
    } 
  }

const escListener = new EscListener(); 

document.addEventListener("keydown", EscListener.closeOnEsc); 
document.addEventListener("escape", escListener.handleOverlayClick.bind(escListener)); 
export { escListener };



  //refactoring the popup class

  class Popup { 
    constructor() { 
      this.modal = document.querySelector('.modal'); 
    
    }
  }
  //creating for different types of popup in the class

  // BOTH OF THESE CLASSES NEEDED TO BE WORKED ON SEPERATELY. 
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
    if (event.target == this.overlay) { 
      this.closeModal(); 
    }
  }

  setEventListeners() {
    // sets Event Listeners
  }

}
