import RenderHtmlElement from "../RenderHtmlElement.js";
import Connection from "../Class/Connection.js";
import { DefaultConnection } from "../Class/Connection.js";
import DOMAnimation from "../Class/SlideAniamtion.js";

/**
 * creer le rendu de la page VoirProduit.html
 * @param {HTMLElement} app
 * @param {String} idProduct
 * @param {Object} CartItem
 * @returns {void}
 */
export default function VoirProduit(app, idProduct, CartItem) {
  const request = DefaultConnection.sendRequest(
    Connection.generateDefaultGetHeader(),
    idProduct.split("id=")[1]
  );
  request
    .then((data) => {
      const img = RenderHtmlElement("img", {
        src: data.imageUrl,
      });

      const description = RenderHtmlElement("p", {
        innerHTML: `<strong>${data.name}:</strong>${data.description}`,
        class: "description",
      });

      const container = RenderHtmlElement(
        "div",
        {
          class: "voirProduit-container",
        },
        [description, RenderForm(data, CartItem)]
      );

      const application = RenderHtmlElement(
        "div",
        {
          class: "voirProduit",
        },
        [img, container]
      );

      app.appendChild(application);
    })
    .catch((error) => {
      console.log(error);
    });
}

function RenderForm(product, CartItem) {
  const { colors, _id, price, imageUrl, description } = product;

  const number = CartItem.getNumberOfAnProduct(_id);

  const select = RenderSelectForm(colors);
  const numberInput = RenderInputNumber(number);

  const button = RenderHtmlElement("button", {
    class: "order-button",
    innerHTML: "Commander",
  });

  button.addEventListener("click", function () {
    DOMAnimation.slideDown(document.getElementById("popup"));
  });

  const div = RenderHtmlElement("div", { class: "container" }, [
    RenderHtmlElement("p", { class: "order-price", innerHTML: `${price}$` }),
    button,
  ]);

  button.addEventListener("click", function () {
    const Property = CartItem.getAllComponentAndEvent();

    Object.defineProperty(product, "id", {
      value: _id,
    });
    Object.defineProperty(product, "image", {
      value: product.imageUrl,
    });

    const number = document.querySelector("#number").value;

    for (let i = 0; i < parseInt(number); i++) {
      CartItem.saveItem({
        id: _id,
        image: imageUrl,
        description: description,
        price: price,
      });
    }
    Property.shopCartComponent.dispatchEvent(Property.AddProductEvent);
  });

  const container = RenderHtmlElement(
    "div",
    {
      class: "command",
    },
    [select, numberInput, div]
  );

  return container;
}

export function RenderInputNumber(number, funcToAdd = null) {
  const label = RenderHtmlElement("label", { innerHTML: "Number:" });

  const input = RenderHtmlElement("input", {
    type: "text",
    value: number,
    id: "number",
    disabled: "disabled",
  });
  const arrowPlus = RenderHtmlElement("div", {
    class: "arrow",
    innerHTML: "+",
  });
  const arrowMinus = RenderHtmlElement("div", {
    class: "arrow",
    innerHTML: "-",
  });

  arrowPlus.addEventListener("click", function () {
    const value = parseInt(input.value) + 1;
    input.setAttribute("value", value);
    if (typeof funcToAdd === "function") {
      funcToAdd();
    }
  });

  arrowMinus.addEventListener("click", function () {
    const value = parseInt(input.value) - 1;
    if (value >= 1) {
      input.setAttribute("value", value);
    }
    if (typeof funcToAdd === "function") {
      funcToAdd();
    }
  });

  const Number = RenderHtmlElement("div", { class: "numbers-rows" }, [
    arrowMinus,
    input,
    arrowPlus,
  ]);

  return RenderHtmlElement("div", { class: "container" }, [label, Number]);
}

function RenderSelectForm(colors) {
  const label = RenderHtmlElement("label", { innerHTML: "Colors:" });

  const options = [];
  for (let i = 0; i < colors.length; i++) {
    options.push(
      RenderHtmlElement("option", {
        class: "colors-choice",
        innerHTML: colors[i],
      })
    );
  }

  const select = RenderHtmlElement("select", { class: "colors" }, options);
  return RenderHtmlElement("div", { class: "container" }, [label, select]);
}
