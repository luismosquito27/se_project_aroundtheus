export default class Api {
  constructor(config) {
    this.baseUrl = config.baseUrl;

    this.headers = config.headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: "GET",

      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(new Error(`Error: ${res.status}`));
    });
  }
}

api.getInitialCards().then((res) => {
  console.log(res);
});

// GET https://around-api.en.tripleten-services.com/v1/users/me
// Remember to pass the token in the request. If the request is successful,
// you will receive a user object in the response:
