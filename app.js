const burger = document.getElementById("burger-btn");
const nav = document.getElementById("nav");
// const menu = document.getElementById("nav-items-wrapper");
// const navWrapper = document.getElementById("navigation-wrapper");
const hasSubmenu = document.getElementsByClassName("has-dropdown");
const burgerBar = document.querySelector("#burger-btn span");

// // console.log(burgerBar);

// burger.addEventListener("click", (e) => {
//     navWrapper.classList.toggle('mobile-menu-open')
//     menu.classList.toggle('hidden');
//     burgerBar.classList.toggle('x');
// });

// Array.from(hasSubmenu).forEach((submenuWrapper) => {
//     console.log(submenuWrapper);
//     submenuWrapper.addEventListener("click", (e) => {

//     e.target.children[0].classList.toggle("hidden");


//     });
//   });


burger.addEventListener("click", (e) => {
    nav.classList.toggle('o')
    // menu.classList.toggle('hidden');
    burgerBar.classList.toggle('x');
});

Array.from(hasSubmenu).forEach((submenuWrapper) => {
    console.log(submenuWrapper);
    submenuWrapper.addEventListener("click", (e) => {

    e.target.children[0].classList.toggle("hidden");


    });
  });