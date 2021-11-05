const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
hamburguer.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburguer.classList.toggle("active");

    navMenu.classList.toggle("active");
}