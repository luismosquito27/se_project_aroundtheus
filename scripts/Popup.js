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

 handleOverlayClick(event) {
    if (Array.from(event.target.classList).includes("modal")) {
      close(); 
    } 
  }
}


  //refactoring the popup class

  class Popup { 
    constructor() { 
      this.modal = document.querySelector('.modal'); 
    
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
  }

  setEventListeners() {
    // set up event listener for on key press
    // fire closeOnEsc no matter what the key is
document.addEventListener("keydown", closeOnEsc); 
document.addEventListener("escape", handleOverlayClick);
  }
}
