/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidePanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidePanel").style.width = "0";
}


var modal = document.getElementById("mySidePanel");
var modal2 = document.getElementById("menuBtn");
/* When the user clicks anywhere outside the navigation bar 
window.onclick = function(event) {
  if (event.target != modal2 && event.target != modal && event.target.parentNode != modal) {
    modal.style.width = "0px";
    modal2.style.display = "block";
  }
}
*/
var panelArray = ['mySidePanel', 'menuBtn', 'box1', 'box2', 'box3'];
window.addEventListener('mouseup', function(event) {
    if (document.documentElement.clientWidth < 700) {
    var myBool = 0;
    for (var i=0; i < panelArray.length; i++) {
      var box = document.getElementById(panelArray[i]);
      if (event.target == box || event.target.parentNode == box) {
        myBool = 1;
      }
    }
    if (myBool == 0)
        modal.style.width = '0';
  }
})
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    if (document.documentElement.clientWidth < 700) {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display == "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    }
  });
}

/* Resize window leads to changing navigation bar */
window.addEventListener('resize', function() {
  if (document.documentElement.clientWidth > 700) {
  document.getElementById("mySidePanel").style.width = "100%";
  }
  else
  document.getElementById("mySidePanel").style.width = "0";
});