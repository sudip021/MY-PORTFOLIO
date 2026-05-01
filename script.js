function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

/* SCROLL ANIMATION */
const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();