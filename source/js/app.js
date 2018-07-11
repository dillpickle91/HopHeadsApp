// Responsiv Nav Button
var navButton = document.getElementById("nav-toggle-button");

function toggleNavDisplay(e) {
    e.preventDefault(), document.getElementById("nav-links").classList.toggle("showNav")
}
navButton.addEventListener("click", toggleNavDisplay)



window.sr = ScrollReveal();
sr.reveal('.main_nav', {
    duration: 600,
    origin: 'top',
});
// sr.reveal('.hero_section', {duration: 1000});
sr.reveal('#breweries', {duration: 2000}, 50);