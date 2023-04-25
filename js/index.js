var typed = new Typed(".input", {
    strings: [`Automatech.`, `Desarrolladores <br class="desaparece">Web.`, `Programadores <br class="desaparece">Web.`,],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});
var hamburguer = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var link = document.querySelector(".nav-list li");

hamburguer.addEventListener("click", function() {
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})