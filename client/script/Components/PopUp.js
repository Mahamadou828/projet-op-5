import RenderHtmlElement from "../RenderHtmlElement.js";
import DOMAnimation from "../Class/SlideAniamtion.js";

/**
 * Genere le pop-up d'aparotion lors de l'ajout d'un element au panier
 * @returns {HTMLElement}
 */
export default function PopUp() {
  const container = RenderHtmlElement(
    "div",
    { class: "popup", id: "popup", display: "none" },
    [RenderHtmlElement("p", { innerHTML: "Produit ajouter" })]
  );

  const button = RenderHtmlElement("button", {}, [
    RenderHtmlElement("i", { class: "fas fa-times" }),
  ]);

  button.addEventListener("click", function () {
    DOMAnimation.slideDown(container);
  });

  container.appendChild(button);
  return container;
}
