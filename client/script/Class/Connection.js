export default class Connection {
  //creation d'un objet de connection charger de toutes les requetes envoyer au back
  constructor(productToRequest, data = {}) {
    this.baseRoute = "http://localhost:3000/api";
    this.productToRequest = productToRequest;
    this.data = data;
  }

  static generateDefaultGetHeader() {
    return {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default",
    };
  }

  static generateDefaultPostHeader(parameter) {
    return {
      method: "POST",
      body: JSON.stringify(parameter),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    };
  }

  sendRequest = (header, url = "", saveData = false) => {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseRoute}/${this.productToRequest}/${url}`, header)
        .then((respond) => {
          respond
            .json()
            .then((data) => {
              if (saveData) {
                this.data = data;
              }
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export const DefaultConnection = new Connection("teddies");
