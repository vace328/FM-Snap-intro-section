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
    // e.stopPropagation();
    });
  });

// Close submenus if user clicks outside of submenu
  document.addEventListener("click", (e) => {
    console.log(e);
    let targetElWithDropdown = e.target.classList.contains("has-dropdown");
    if(!targetElWithDropdown) {
        console.log("nema meni");
        Array.from(hasSubmenu).forEach((submenuWrapper) => {
            if (!submenuWrapper.children[0].classList.contains("hidden")) {
                submenuWrapper.children[0].classList.add("hidden");
            }            
        });
    } else {
        console.log('podmeni!');        
    }
});