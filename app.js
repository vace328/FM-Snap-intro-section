const burger = document.getElementById("burger-btn");
const nav = document.getElementById("nav");
// const menu = document.getElementById("nav-items-wrapper");
// const navWrapper = document.getElementById("navigation-wrapper");
const hasSubmenu = document.getElementsByClassName("has-dropdown");
const burgerBar = document.querySelector("#burger-btn span");

let mobileScreenMenu = false;

burger.addEventListener("click", (e) => {
  nav.classList.toggle("o");
  if (nav.classList.contains("o")) {
    mobileScreenMenu = true;
    console.log(mobileScreenMenu);
  } else {
    mobileScreenMenu = false;
    console.log(mobileScreenMenu);
  }
  burgerBar.classList.toggle("x");
});

Array.from(hasSubmenu).forEach((submenuWrapper) => {
      submenuWrapper.children[1].classList.add("hidden");
      console.log(submenuWrapper.children);
});

Array.from(hasSubmenu).forEach((submenuWrapper) => {
  // console.log(submenuWrapper.children);
  // if (hasSubmenu || hasSubmenu != null) {
  //   Array.from(hasSubmenu).forEach((submenuWrapper) => {
  //     submenuWrapper.children[1].classList.add("hidden");
  //   });
  // }

  submenuWrapper.addEventListener("click", (e) => {
    // e.stopPropagation();

    // if (e.target.classList !== undefined && e.target.children[0].classList.contains("hidden")) {
    //   console.log(e.target.children[0]);
    //   e.target.children[0].classList.remove("hidden");
    // } else {
    //   console.log(e.target.children[0]);
    //   e.target.children[0].classList.add("hidden");
    // }


    if (!mobileScreenMenu && (hasSubmenu || hasSubmenu != null)) {
      Array.from(hasSubmenu).forEach((submenuWrapper) => {
        submenuWrapper.children[1].classList.add("hidden");
        submenuWrapper.children[0].classList.remove("arrow-flip");
      });
    }

    if (e.target.children.length > 1) {
      console.log(e.target.children.length > 0);
      if (e.target.children[1].classList.contains("hidden")) {
        // console.log(e.target.children[0]);
        e.target.children[1].classList.remove("hidden");
        e.target.children[0].classList.add("arrow-flip");
      } else {
        // console.log(e.target.children[0]);
        e.target.children[1].classList.add("hidden");
        e.target.children[0].classList.remove("arrow-flip");
      }
    }
  });
});

// Close submenus if user clicks outside of submenu

document.addEventListener("click", (e) => {
  if (!mobileScreenMenu) {
    e.stopPropagation();
    let targetElWithDropdown = e.target.classList.contains("has-dropdown");
    if (!targetElWithDropdown) {
      Array.from(hasSubmenu).forEach((submenuWrapper) => {
        if (!submenuWrapper.children[1].classList.contains("hidden")) {
          submenuWrapper.children[1].classList.add("hidden");
          submenuWrapper.children[0].classList.remove("arrow-flip");
        }
      });
    } else {
      console.log("clicked outside of submenu!");
    }
  } else {
    console.log("ddfdfb!");
  }
});
