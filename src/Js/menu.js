const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".containerNav");
const remover = document.querySelector(".containerHeader");
const main = document.querySelector("containerMain");
const footer = document.querySelector("containerFooter");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    remover.style.display = nav.classList.contains("active") ? "none" : "flex";
    main.style.display = nav.classList.contains("active") ? "none" : "flex";
    footer.style.display = nav.classList.contains("active") ? "none" : "flex";
});
