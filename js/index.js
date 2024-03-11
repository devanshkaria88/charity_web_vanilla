document.addEventListener("scroll", (e) => {
  navbarScrollEffect();
});

// This is the function that handles the navbar's transition effect on scroll
// It leverages the DOM manipulation to achieve swapping of css styles and to change some specific properties of selected HTML elements.
function navbarScrollEffect() {
  let navbar = document.querySelector(".navbar");
  let floatingNavbar = document.querySelector(".floating-navbar-glass");
  let floatingNavbarButton = navbar.lastElementChild;
  if (window.scrollY > (window.screenY + window.innerHeight) * 0.1) {
    floatingNavbar.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.05)";
    floatingNavbarButton.classList.remove("outline-cta");
    floatingNavbarButton.classList.add("filled-cta");
    navbar.style.margin = "0px";
    navbar.style.padding = "10px 2.5vw";
    navbar.style.boxShadow = "1px 1px 2px rgba(254, 251, 243, 0.7)";
    navbar.style.background = "rgba(254, 251, 243, 0.3)";
    navbar.style.backdropFilter = "blur(10px)";
  } else if (window.scrollY <= (window.screenY + window.innerHeight) * 0.1) {
    console.log("screen<=10%");
    floatingNavbar.style.boxShadow = "0px 0px 0px transparent";
    floatingNavbarButton.classList.remove("filled-cta");
    floatingNavbarButton.classList.add("outline-cta");
    navbar.style.margin = "2.2vh 4.5vw";
    navbar.style.padding = "0px";
    navbar.style.boxShadow = "0px 0px 0px transparent";
    navbar.style.background = "rgba(254, 251, 243, 0.0)";
    navbar.style.backdropFilter = "0px";
  }
}
