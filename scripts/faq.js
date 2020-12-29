// get everything in accordion class
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
     // if max is 0 then it is currently close
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      //null is 0
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      //get the value of content height and return in px property
      //concantenate with px string
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
