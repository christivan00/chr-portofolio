window.addEventListener("load", () => {
    const body = document.querySelector("body");
    body.classList.add("loaded");
  });
  
  
const card = document.querySelector(".card");

card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
  