window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  navbar.style.background =
    window.scrollY > 50
      ? "rgba(0,0,0,0.95)"
      : "rgba(0,0,0,0.6)";

});