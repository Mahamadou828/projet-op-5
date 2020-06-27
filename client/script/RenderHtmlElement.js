/**
 * Renvoie un element HTML
 * @param {String} elementName le nom de l'element html a creer
 * @param {Object} elementPropertie objet avec les differentes propriete de l'element
 * @param {Array} child tableau d'element html qui seront inserer en enfant
 * @returns {HTMLElement}
 */
export default function RenderHtmlElement(
  elementName = "div",
  elementPropertie = {},
  child = []
) {
  const elt = document.createElement(elementName);
  const properties = Object.entries(elementPropertie);
  for (let [key, value] of properties) {
    if (key === "innerHTML") {
      elt.innerHTML = value;
    } else {
      elt.setAttribute(key, value);
    }
  }

  for (let i = 0; i < child.length; i++) {
    elt.appendChild(child[i]);
  }
  return elt;
}
