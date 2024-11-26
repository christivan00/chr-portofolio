window.addEventListener("load", () => {
    const body = document.querySelector("body");
    body.classList.add("loaded");
  });
  
  
const card = document.querySelector(".card");

card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

const links = document.querySelectorAll(".halus");
links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetid = this.getAttribute('href');
          document.querySelector(targetid).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });