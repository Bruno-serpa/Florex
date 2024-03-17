const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".containerNav");

hamburger.addEventListener("click", () =>
    nav.classList.toggle("active")
);