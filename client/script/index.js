//on importe tout les objet neccesaire pour construire la page
import Cart from "./Components/Cart.js";
import MainPage from "./Routes/MainPage.js";
import RenderHtmlElement from "./RenderHtmlElement.js";
import DOMAnimation from "./Class/SlideAniamtion.js";
import VoirProduit from "./Routes/VoirProduit.js";
import Panier from "./Routes/Panier.js";
import Confirmation from "./Routes/Confirmation.js";
import PopUp from "./Components/PopUp.js";
//Creation du panier grace a l'objet Cart importer
export const CartItem = new Cart("products");

window.onload = () => {
  const app = document.querySelector("#app");

  const navItem = RenderHtmlElement(
    "a",
    {
      innerHTML: "Orinoco",
      href: "/client/index.html",
    },
    [RenderHtmlElement("i", { class: "fas fa-shopping-cart" })]
  );

  //creation de la navbar de la page
  const NavBar = RenderHtmlElement(
    "nav",
    {
      class: "header",
    },
    [navItem, CartItem.renderCart()]
  );

  //on ajoute la navbar au document
  document.body.insertBefore(NavBar, document.body.firstChild);
  NavBar.parentNode.insertBefore(
    CartItem.connectCartEvent(),
    NavBar.nextSibling
  );

  const CartHtml = CartItem.getAllComponentAndEvent();
  CartHtml.buttonComponent.addEventListener("click", function () {
    DOMAnimation.slideToggle(CartHtml.shopCartComponent);
  });

  let currentPage = window.location.href.split("client/")[1];
  currentPage = currentPage.split("?");

  //appelle les fonctions de rendu selon la page
  switch (currentPage[0]) {
    case "index.html":
      app.appendChild(PopUp());
      MainPage(app, CartItem);
      break;
    case "voirProduit.html":
      app.appendChild(PopUp());
      VoirProduit(app, currentPage[1], CartItem);
      break;
    case "panier.html":
      Panier(app, CartItem);
      break;
    case "confirmation.html":
      Confirmation();
      break;
    default:
      window.location.assign("/client/index.html");
  }
};
