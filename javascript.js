/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
}

console.log("test")

const button = document.getElementById("button")
const close = document.getElementById("close")

console.log(button)

button.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu2);



function toggleMenu(){
  document.getElementById("mobile").classList.remove("slide-navbar-closed")
}

function toggleMenu2(){
  document.getElementById("mobile").classList.add("slide-navbar-closed")
}