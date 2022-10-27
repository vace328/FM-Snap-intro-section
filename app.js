const burger = document.getElementById("burger-btn");
const menu = document.getElementById("nav-items-wrapper");
const navWrapper = document.getElementById("navigation-wrapper");
const hasSubmenu = document.getElementsByClassName("has-dropdown");
const burgerBar = document.querySelector("#burger-btn span");

// console.log(burgerBar);

burger.addEventListener("click", (e) => {
    navWrapper.classList.toggle('mobile-menu-open')
    menu.classList.toggle('hidden');
    burgerBar.classList.toggle('x');
});

Array.from(hasSubmenu).forEach((submenuWrapper) => {
    console.log(submenuWrapper);
    submenuWrapper.addEventListener("click", (e) => {

    e.target.children[0].classList.toggle("hidden");


    });
  });