/**
 * Creer le rendu de la page confirmation.html
 */
export default function Confirmation() {
  const { orderId, price } = JSON.parse(localStorage.getItem("orderId"));
  localStorage.clear();
  document.querySelector("#price").innerHTML = `Au total ${price}`;
  document.querySelector(
    "#orderId"
  ).innerHTML = `L'id de votre demande: ${orderId}$`;
}
