window.onload = () => {
  const next = document.querySelector("#next");
  const prev = document.querySelector("#prev");
  const carousel = document.querySelector(".container-carous");
  let move = -20;

  next.addEventListener("click", function () {
    console.log(move);
    console.log("oui");
    carousel.style.transform = `translate3d(${move}%, 0, 0)`;
    move = move * 2;
    carousel.removeAttribute("transform");
  });

  prev.addEventListener("click", function () {});
};
