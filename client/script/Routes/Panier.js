import Product from "../Components/Product.js";
import { RenderInputNumber } from "./VoirProduit.js";
import RenderHtmlElement from "../RenderHtmlElement.js";
import { VerifyEmail, VerifyText } from "../VerifyInput.js";
import { CartItem } from "../index.js";
import Connection from "../Class/Connection.js";
import { DefaultConnection } from "../Class/Connection.js";
/**
 * Permet de generer la vue du panier
 * @param {HTMLElement} app
 * @returns {void}
 */
export default function Panier(app) {
  const { products, price } = CartItem.getCartContain();

  products.forEach((product) => {
    app.appendChild(
      new Product({
        imageUrl: product.item.image,
        description: product.item.description,
        _id: product.item.id,
        price: product.item.price,
      }).renderProduct({
        addLink: false,
        AddCustonProduct: true,
        custonProduct: RenderInputNumber(product.number, setPrice),
        class: "panier-product",
      })
    );
  });

  app.appendChild(
    RenderHtmlElement("p", {
      id: "price",
      innerHTML: `Au total ${price}$`,
    })
  );

  app.appendChild(renderForm());
}

/**
 * Permet de mettre la mise a jour du prix total en cas de changement
 */
function setPrice() {
  let total = 0;
  const paniers = document.querySelectorAll(".panier-product");
  paniers.forEach((panier) => {
    const price = panier.children[3].textContent.split("$")[0];
    const number = panier.lastChild.lastChild.childNodes[1].value;
    total += parseInt(price) * parseInt(number);
  });
  document.querySelector("#price").innerHTML = `Au total ${total}$`;
}

/**
 * render le formulaire
 * @returns {HTMLElement}
 */
function renderForm() {
  const Field = [
    {
      type: "text",
      placeholder: "Enter your name",
      id: "nom",
    },
    {
      type: "text",
      placeholder: "Enter your surname",
      id: "prenom",
    },
    {
      type: "text",
      placeholder: "Enter your address",
      id: "adresse",
    },
    {
      type: "text",
      placeholder: "Enter your town",
      id: "ville",
    },
    {
      type: "email",
      placeholder: "Enter your email",
      id: "email",
    },
  ];
  const input = [];

  for (let i = 0; i < Field.length; i++) {
    input.push(
      RenderHtmlElement("input", {
        class: "input",
        type: Field[i].type,
        placeholder: Field[i].placeholder,
        id: Field[i].id,
      })
    );
  }

  input.forEach((elt) => {
    AddEventToInput(elt);
  });

  const button = RenderHtmlElement("button", {
    type: "submit",
    innerHTML: "Commander",
  });

  button.addEventListener("click", function (e) {
    sendCommand(e);
  });

  input.push(button);
  return RenderHtmlElement("form", { class: "form" }, input);
}

/**
 * assigne au input la verification des champs
 * @param {HTMLElement} input
 * @returns {void}
 */
function AddEventToInput(input) {
  input.addEventListener("change", function (e) {
    let error = "";
    const value = e.target.value;
    switch (e.target.type) {
      case "text":
        error = VerifyText(value);
        if (error.length > 0) {
          setError(e, error);
        } else {
          e.target.classList.remove("error");
        }
        break;
      case "email":
        error = VerifyEmail(value);
        if (error.length > 0) {
          setError(e, error);
        } else {
          e.target.classList.remove("error");
        }
        break;
    }
  });
}

/**
 * Assign les errors au champ
 * @param {HTMLElement} input
 * @param {String} error
 * @returns {void}
 */
function setError(input, error) {
  input.target.value = "";
  input.target.placeholder = error;
  input.target.classList.add("error");
}

/**
 * envoie la commande de l'utilisateur et redirige vers la page de confirmation
 * @param {Event} event
 * @returns {void}
 */
function sendCommand(event) {
  event.preventDefault();
  const price = document.querySelector("#price").innerHTML.split("Au total")[1];

  if (parseInt(price) > 0) {
    const inputs = document.querySelectorAll(".input");
    if (!VerifyForm(inputs)) {
      const values = [];
      inputs.forEach((input) => {
        const value = [input.id, input.value];
        values.push(value);
      });
      const contact = Object.fromEntries(new Map(values));
      const Cart = CartItem.getCartContain().products;
      const products = Cart.map((product) => product.item.id);

      DefaultConnection.sendRequest(
        Connection.generateDefaultPostHeader({ contact, products }),
        "/order"
      )
        .then((data) => {
          if (data.orderId.length > 0) {
            localStorage.setItem(
              "orderId",
              JSON.stringify({
                orderId: data.orderId,
                price: price,
              })
            );
            window.location.href = "confirmation.html";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}

/**
 *Le formulaire est-il valide
 * @param {Array} inputs
 * @returns {boolean}
 */
function VerifyForm(inputs) {
  let error = false;
  inputs.forEach((input) => {
    if (input.type === "text") {
      if (VerifyText(input.value).length > 0) {
        error = true;
      }
    } else if (input.type === "email") {
      if (VerifyEmail(input.value).length > 0) {
        error = true;
      }
    }
  });
  return error;
}
