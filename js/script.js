// Navbar fixed
window.onscroll = function() {
   const header = document.querySelector("header");
   const fixedNav = header.offsetTop;
   if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed", "shadow-on-scroll");
   } else {
      header.classList.remove("navbar-fixed", "shadow-on-scroll");
   }
}

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function(){
   hamburger.classList.toggle("hamburger-active");
   navMenu.classList.toggle("hidden");
});