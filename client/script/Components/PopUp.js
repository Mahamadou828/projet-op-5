import RenderHtmlElement from "../RenderHtmlElement.js";
import DOMAnimation from "../Class/SlideAniamtion.js";

/**
 * Genere le pop-up d'aparotion lors de l'ajout d'un element au panier
 * @returns {HTMLElement}
 */
export default function PopUp() {
  const container = RenderHtmlElement("section", { class: "popup disable" }, [
    RenderHtmlElement("p", { innerHTML: "Produit ajouter" }),
  ]);

  const button = RenderHtmlElement("button", {}, [
    RenderHtmlElement("i", { class: "fas fa-times" }),
  ]);

  button.addEventListener("click", function () {
    DOMAnimation.slideUp(document.querySelector("#popup"));
  });

  container.appendChild(button);
  return RenderHtmlElement("div", { class: "popup-contain", id: "popup" }, [
    container,
  ]);
}
