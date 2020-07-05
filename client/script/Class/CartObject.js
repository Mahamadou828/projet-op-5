/**
 * Objet contenant les proprietes et methodes associees au panier utilisateur
 */
export default class CartObjectProperty {
  /**
   * Cle ou sera stocker les donnees dans le localStorage
   * @param {String} keyItem
   */
  constructor(keyItem) {
    this.key = keyItem;
    this.price = 0;
    this.products = [];
    this.AddProduct = new Event("AddProduct");
    this.RemoveProduct = new Event("RemoveProduct");

    if (localStorage.getItem(keyItem)) {
      const cart = JSON.parse(localStorage.getItem(keyItem));
      this.price = cart.price;
      this.products = cart.products;
    }
  }

  /**
   * Enregistre l'element dans le localStorage
   * @param {Object} item
   */
  saveItem(item) {
    let updating = false;
    this.price += item.price;
    this.products.forEach((product) => {
      if (product.item.id === item.id) {
        product.number++;
        updating = true;
      }
    });
    if (!updating) {
      this.products.push({
        item,
        number: 1,
      });
    }

    localStorage.setItem(
      this.key,
      JSON.stringify({
        price: this.price,
        products: this.products,
      })
    );
  }

  /**
   *
   * @param {Object} item
   */
  removeItem(item) {
    this.products.forEach((product) => {
      if (product.item.id === item.id) {
        product.number--;
      }
    });
  }

  getCartContain() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  getNumberOfAnProduct(id) {
    let update = false;
    let number = 0;

    this.products.forEach((product) => {
      if (product.item.id === id) {
        update = true;
        number = product.number;
      }
    });

    if (!update) {
      return 0;
    } else {
      return number;
    }
  }
}
