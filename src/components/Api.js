class Api {
  getInitialCards() {
    return fetch(" https://around-api.en.tripleten-services.com/v1/cards", {
      method: "GET",
      headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
        "content-Type": "application/json",
      },
    });

api.getInitialCards() 
 .then(cardData => { 
    const card = createCard(cardData); 
     const cardElement = createCard(cardData);
      cardSection.append(cardElement);
 })
 .catch(err => console.error('Error fetching cards:', err));
}

  }




//  .then(res => {
//    if (res.ok) {
//      return res.json();
//    }
// // if the server returns an error, reject the promise
//        return Promise.reject(`Error: ${res.status}`);
//      });
//  }

// GET https://around-api.en.tripleten-services.com/v1/users/me
// Remember to pass the token in the request. If the request is successful, you will receive a user object in the response:
