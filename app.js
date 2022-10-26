const burger = document.getElementById("burger-btn");
const menu = document.getElementById("nav-items-wrapper");
const hasSubmenu = document.getElementsByClassName("has-dropdown");

burger.addEventListener("click", (e) => {
    menu.classList.toggle('hidden');
});

Array.from(hasSubmenu).forEach((submenuWrapper) => {
    console.log(submenuWrapper);
    submenuWrapper.addEventListener("click", (e) => {

    e.target.children[0].classList.toggle("hidden");


    });
  });