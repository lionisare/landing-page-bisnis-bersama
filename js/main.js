const btnMenu = document.querySelector(".menu-navigation");
const header = document.querySelector("header");

// menu
document.querySelector("#btn-menu").onclick = (e) => {
  btnMenu.classList.toggle("active");
  e.preventDefault();
};
// klik diluar sidebar agar bisa hilang
const menuIkon = document.querySelector("#btn-menu");
// menu
document.addEventListener("click", function (e) {
  if (!menuIkon.contains(e.target) && !btnMenu.contains(e.target)) {
    btnMenu.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
