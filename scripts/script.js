// Feather Replace
feather.replace();

// Menu Hamburger
const hamburgerOpen = () => {
    document.getElementById("hamburgerOpen").style.display = "none";
    document.getElementById("hamburgerClose").style.display = "block";
    document.getElementById("mobile-nav").style.display = "block";
}

const hamburgerClose = () => {
    document.getElementById("hamburgerOpen").style.display = "block";
    document.getElementById("hamburgerClose").style.display = "none";
    document.getElementById("mobile-nav").style.display = "none";
}