// Take an object with the selectors of two elements into the
// constructor: one for the profile’s name element and one for its job element.
export default class UserInfo {
  constructor({ profileTitle, profileDescription }) {
    this._profileTitle = document.querySelector(profileTitle);
    this._profileDescription = document.querySelector(profileDescription);
  }
  getUserInfo() {
    // // returns an object containing information about the user.
    return {
      name: this._profileTitle.textContent,
      job: this._profileDescription.textContent,
    };
  }

  setUserInfo({ name, about }) {
    // takes a new user data and adds it to the page.
    this._profileTitle.textContent = name;
    this._profileDescription.textContent = about;
    // This method should be used after successful submission of the profile form.
  }
}
