export default class Connection {
  /**
   * Objet qui s'occupe de la connection a l'api, des requetes etc
   * @param {String} productToRequest permet d'indiquer qu'elle produit nous voulons recevoir de l'api
   */
  constructor(productToRequest) {
    this.baseRoute = "http://localhost:3000/api";
    this.productToRequest = productToRequest;

    this.defaultGetHeader = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default",
    };

    this.defaultPostHeader = {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    };

    this.sendRequest = this.sendRequest.bind(this);
  }

  /**
   * permet  de generer un header pour les requetes de type POST
   * @param {Object} parameter
   */
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

  /**
   * Permet d'envoyer une requete a l'api
   * @param {Headers} header header pour la requete
   * @param {String} url
   */
  sendRequest(header, url = "") {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseRoute}/${this.productToRequest}/${url}`, header)
        .then((respond) => {
          respond
            .json()
            .then((data) => {
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
  }
}

//Objet de connection par defaut, recupere la categorie "teddies" des produits
export const DefaultConnection = new Connection("teddies");
