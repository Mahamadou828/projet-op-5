import RenderHtmlElement from "../RenderHtmlElement.js";
import CartObjetProperty from "../Class/CartObject.js";

/**
 * Genere le panier present sur les pages
 */
export default class Cart extends CartObjetProperty {
  /**
   * @param {String} keyItem la cle pour le localStorage
   */
  constructor(keyItem) {
    super(keyItem);

    this.headerShop = RenderHtmlElement("div", {
      class: "shop-container-header",
    });

    this.bodyShop = RenderHtmlElement("div", {
      class: "shop-container-body",
      id: "shopBody",
    });

    this.container = RenderHtmlElement(
      "div",
      {
        class: "shop disable",
        id: "shopCart",
        style: "display: none",
      },
      [this.headerShop, this.bodyShop]
    );
  }

  /**
   * @returns {HTMLElement} renvoie le rendu HTML du panier
   */
  renderCart() {
    this.button = RenderHtmlElement("button", {
      innerHTML: "Panier",
      class: "cart",
    });
    if (this.renderBodyShop()) {
      return this.button;
    }
  }

  /**
   * Connecte le panier au evenement d'ajout et de suppresion des items
   * @returns {HTMLElement}
   */
  connectCartEvent() {
    this.container.addEventListener(
      "AddProduct",
      function () {
        const renderBody = this.renderBodyShop();
        if (document.querySelector("#shopCart") && renderBody) {
          this.container.replaceChild(
            this.bodyShop,
            document.querySelector("#shopBody")
          );
        } else if (renderBody) {
          this.container.appendChild(this.bodyShop);
        }
      }.bind(this)
    );

    return this.container;
  }

  /**
   * @returns {Boolean} le rendu est il fini
   */
  renderBodyShop() {
    this.bodyShop.innerHTML = "";

    const Cart = this.getCartContain();

    if (Cart) {
      const ProductList = Cart.products;
      for (let i = 0; i < ProductList.length; i++) {
        this.bodyShop.appendChild(this.renderItem(ProductList[i]));
      }
    }

    const button = RenderHtmlElement("button", {
      class: "order",
      innerHTML: "Passer commande",
    });

    this.bodyShop.appendChild(button);

    button.addEventListener("click", function () {
      window.location.href = "panier.html";
    });

    return true;
  }

  /**
   * genere le rendu HTML d'un produit
   * @param {HTMLElement} item  produit servant a faire le rendu
   * @returns {HTMLElement}
   */
  renderItem(item) {
    const { image, price, description } = item.item;
    const { number } = item;
    const div = RenderHtmlElement(
      "div",
      {
        class: "detail",
      },
      [
        RenderHtmlElement("p", {
          innerHTML: `${price}$*${number} = ${price * number}$`,
          class: "price",
        }),
        RenderHtmlElement("p", { innerHTML: `detail: ${description}` }),
      ]
    );
    const renderItem = RenderHtmlElement(
      "div",
      { class: "shop-container-body-product" },
      [RenderHtmlElement("img", { src: image }), div]
    );

    return renderItem;
  }

  /**
   * Permet de recupere tout les noeuds HTML constituant le panier
   */
  getAllComponentAndEvent() {
    return {
      buttonComponent: this.button,
      shopCartComponent: this.container,
      AddProductEvent: this.AddProduct,
      RemoveProductEvent: this.RemoveProduct,
    };
  }
}
