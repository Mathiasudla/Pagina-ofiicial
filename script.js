// MENU RESPONSIVE

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// EFECTO NAVBAR SCROLL

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background = "rgba(0,0,0,0.95)";

  }else{

    navbar.style.background = "rgba(0,0,0,0.6)";

  }

});

// ANIMACION SCROLL

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){

      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";

    }

  });

});