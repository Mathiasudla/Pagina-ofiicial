window.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

});