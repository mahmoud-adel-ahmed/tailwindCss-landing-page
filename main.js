let btn = document.querySelector(".menu-btn");
let menu = document.querySelector(".nav-menu");
console.log(menu);
btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});
