function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}