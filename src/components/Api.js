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

Api.removeCard(); {
  return fetch(`${this.baseUrl}/card/${cardId}`, {
    method: "DELETE",
    headers: this.headers,
  }).then(this._handleServerResponse);
}

  _handleServerResponse(res) {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    }

// Remember to pass the token in the request. If the request is successful,
// you will receive a user object in the response
