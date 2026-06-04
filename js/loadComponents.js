async function loadComponent(id, file) {

  const response = await fetch(file);
  const html = await response.text();

  document.getElementById(id).innerHTML = html;
}

window.addEventListener("DOMContentLoaded", async () => {

  await loadComponent("navbar-container", "./components/navbar.html");
  await loadComponent("hero-container", "./components/hero.html");
  await loadComponent("about-container", "./components/about.html");
  await loadComponent("skills-container", "./components/skills.html");
  await loadComponent("projects-container", "./components/projects.html");
  await loadComponent("contact-container", "./components/contact.html");
  await loadComponent("footer-container", "./components/footer.html");

});