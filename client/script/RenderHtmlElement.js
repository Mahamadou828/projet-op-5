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
