export default class UserInfo {
  constructor({ profileTitle, profileDescription }) {
    this._profileTitle = document.querySelector(profileTitle);
    this._profileDescription = document.querySelector(profileDescription);
  }
  getUserInfo() {
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
