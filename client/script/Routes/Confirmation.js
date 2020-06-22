export default function Confirmation() {
  const { orderId, price } = JSON.parse(localStorage.getItem("orderId"));
  document.querySelector("#price").innerHTML = `${price}`;
  document.querySelector(
    "#orderId"
  ).innerHTML = `L'id de votre demande: ${orderId}$`;
  localStorage.clear();
}
