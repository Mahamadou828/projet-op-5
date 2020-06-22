import RenderHtmlElement from "../RenderHtmlElement.js";

export default class Product {
  /**
   * Represente un objet a vendre sur le site
   * @param {Object} param l'objet a vendre
   * @param {String} param.imageUrl image de l'objet
   * @param {String}  param.description description de l'objet
   * @param {String}  param.price prix de l'objet
   * @param {String}  param._id id de l'objet
   */
  constructor({ imageUrl, description, price, _id }) {
    this.image = imageUrl;
    this.description = description;
    this.price = price;
    this.id = _id;
    this.hasAnRender = false;
  }

  /**
   * Permet de produire un rendu de l'objet
   * @param {Object} parameter
   * @param {Boolean} param.addLink permet l'ajout d'un lien
   * @param {Boolean} param.class permet l'ajout d'une class au container de l'elt
   * @returns {HTMLElement}
   */
  renderProduct(parameter = null) {
    let contain;
    this.imageComponent = RenderHtmlElement("img", {
      src: this.image,
    });

    this.descriptionComponent = RenderHtmlElement("p", {
      innerHTML: this.description,
    });

    this.priceComponent = RenderHtmlElement("p", {
      innerHTML: `${this.price}$`,
      class: "price",
    });

    if (typeof parameter === "object" && parameter.AddCustonProduct) {
      contain = parameter.custonProduct;
    } else {
      contain = this.renderSimpleProduct(parameter);
    }

    this.container = RenderHtmlElement(
      "article",
      {
        class: typeof parameter.class === "string" ? parameter.class : "",
      },
      [
        this.imageComponent,
        RenderHtmlElement("hr"),
        this.descriptionComponent,
        this.priceComponent,
        contain,
      ]
    );

    this.hasAnRender = true;
    return this.container;
  }

  /**
   * permet de recupere individuellement tous les elements HTML composant l'objet pour permettre l'ajout eventuelle d'evenement
   */
  getAllComponent() {
    if (this.hasAnRender) {
      return {
        description: this.descriptionComponent,
        image: this.imageComponent,
        link:
          typeof this.linkComponent === "object" ? this.linkComponent : null,
        container: this.container,
        price: this.priceComponent,
        order: this.orderComponent,
      };
    } else {
      return "Error the component doesn't have an render form";
    }
  }

  renderSimpleProduct(parameter) {
    this.orderComponent = RenderHtmlElement(
      "button",
      {
        innerHTML: "Ajouter au panier",
        idProduct: this.id,
      },
      [RenderHtmlElement("i", { class: "fab fa-shopify" })]
    );
    const contain = RenderHtmlElement("div", { class: "container" }, [
      this.orderComponent,
    ]);

    //verifions s'il existe des parametre supplementaire
    if (parameter.addLink) {
      this.linkComponent = RenderHtmlElement(
        "a",
        {
          innerHTML: parameter.linkText,
          href: parameter.link,
        },
        RenderHtmlElement("i", { class: "fas fa-eye" })
      );
      contain.appendChild(this.linkComponent);
    }

    return contain;
  }
}
