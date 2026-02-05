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

  removeCard(card) {
    return fetch(`${this.baseUrl}/cards/${card}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }
}

// Remember to pass the token in the request. If the request is successful,
// you will receive a user object in the response
