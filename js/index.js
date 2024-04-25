document.addEventListener("scroll", (e) => {
  navbarScrollEffect();
});
var drawerButton = document.getElementById("drawerButton");
drawerButton.addEventListener("click", navbarButton);

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", showToast);

var isNavbarOpen = false;

// This is the function that handles the navbar's transition effect on scroll
// It leverages the DOM manipulation to achieve swapping of css styles and to change some specific properties of selected HTML elements.
function navbarScrollEffect() {
  let navbar = document.querySelector(".navbar");
  let drawerButton = document.querySelector(".collapsed-navbar-button");
  let navbarSigninButton =
    navbar.lastElementChild.firstElementChild.firstElementChild;
  if (window.scrollY > (window.screenY + window.innerHeight) * 0.1) {
    navbarSigninButton.classList.remove("outline-cta");
    navbarSigninButton.classList.add("filled-cta");
    navbar.style.margin = "0px";
    navbar.style.padding = "10px 2.5vw";
    navbar.style.boxShadow = "1px 1px 2px rgba(254, 251, 243, 0.7)";
    navbar.style.background = "rgba(254, 251, 243, 0.3)";
    navbar.style.backdropFilter = "blur(10px)";
    drawerButton.style.boxShadow = "1px 1px 10px rgba(0, 0, 0, 0.05)";
  } else if (window.scrollY <= (window.screenY + window.innerHeight) * 0.1) {
    console.log("screen<=10%");
    navbarSigninButton.classList.remove("filled-cta");
    navbarSigninButton.classList.add("outline-cta");
    navbar.style.margin = "2.2vh 4.5vw";
    navbar.style.padding = "0px";
    navbar.style.boxShadow = "0px 0px 0px transparent";
    drawerButton.style.boxShadow = "0px 0px 0px transparent";
    navbar.style.background = "rgba(254, 251, 243, 0.0)";
    navbar.style.backdropFilter = "blur(0px)";
  }
}

function showToast() {
  console.log("toastbar called");
  var x = document.getElementById("toastbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function navbarButton() {
  if (isNavbarOpen) {
    isNavbarOpen = false;
    closeDrawer();
  } else {
    isNavbarOpen = true;
    openDrawer();
  }
}

function openDrawer() {
  let drawer = document.querySelector(".drawer");
  drawer.style.visibility = "visible";
  drawer.style.right = "0px";
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function closeDrawer() {
  let drawer = document.querySelector(".drawer");
  drawer.style.visibility = "hidden";
  drawer.style.right = "-100%";
  window.onscroll = function () {};
}
