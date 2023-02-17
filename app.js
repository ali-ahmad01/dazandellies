let links = document.getElementsByClassName("links");
let active = document.getElementsByClassName("active");

function link() {
    active[0].style.backgroundColor = "#D9D9D914";
}

function home() {
    active[0].style.backgroundColor = "#D9D9D945";
}

let nav = document.getElementById("nav");

window.addEventListener('scroll', function () {
    if (window.scrollY >= 150) {
        nav.style.backgroundColor = "#461851";
    } else {
        nav.style.backgroundColor = "transparent";
    }
});