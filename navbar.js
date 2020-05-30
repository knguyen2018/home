/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidePanel").style.width = "250px";
  document.getElementById("menuBtn").style.display = "none";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidePanel").style.width = "0";
  document.getElementById("menuBtn").style.display = "block";
}


var modal = document.getElementById("mySidePanel");
var modal2 = document.getElementById("menuBtn");
/* When the user clicks anywhere outside the navigation bar */
window.onclick = function(event) {
  if (event.target != modal2 && event.target != modal && event.target.parentNode != modal) {
    modal.style.width = "0px";
    modal2.style.display = "block";
  }
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
