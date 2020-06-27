/**
 * fonction charger de generer la vue de la page index.html prend en parametre le noeud dans lequel il doit faire le rendu
 * @param {HTMLElement} app
 * @param {Object} cart le panier de l'utilisateur
 */
import { DefaultConnection } from "../Class/Connection.js";
import Connection from "../Class/Connection.js";
import Product from "../Components/Product.js";
import DOMAnimation from "../Class/SlideAniamtion.js";

/**
 * Function qui genere le rendu de la page principale
 * @param {HTMLElement} app
 * @param {Object} Cart
 */
export default function RenderMainPage(app, Cart) {
  const CartProperty = Cart.getAllComponentAndEvent();
  const productObject = [];
  const request = DefaultConnection.sendRequest(
    Connection.generateDefaultGetHeader()
  );
  request
    .then((data) => {
      data.forEach((element) => {
        const elt = new Product(element);
        app.appendChild(
          elt.renderProduct({
            class: "product__item",
            addLink: true,
            link: `/client/voirProduit.html?id=${element._id}`,
            linkText: "Regarder l'objet",
          })
        );
        productObject.push(elt);

        const orderButton = elt.getAllComponent().order;

        orderButton.addEventListener("click", function (e) {
          const id = e.target.getAttribute("idProduct");
          let productToAdd;
          productObject.forEach((item) => {
            if (item.id === id) {
              productToAdd = item;
            }
          });
          if (typeof productToAdd === "object") {
            Cart.saveItem(productToAdd);
            CartProperty.shopCartComponent.dispatchEvent(
              CartProperty.AddProductEvent
            );
            DOMAnimation.slideDown(document.getElementById("popup"));
          }
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
  DOMAnimation.slideUp(document.querySelector("#popup"));
}
