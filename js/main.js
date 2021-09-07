//menu bar
var bar = document.querySelector(".bar");
var menu = document.querySelector(".menu");

bar.onclick = () => {
  menu.classList.toggle("show");
  bar.classList.toggle("close");
};

//preload
window.onload = () => {
  setTimeout(function () {
    document.querySelector(".loader-wrapper").classList.add("hidden");
  }, 2000);
};

//landing animation /*
var img = document.querySelector(".landing-img");
var text = document.querySelector(".landing-content .text");

window.addEventListener("load", function () {
  setTimeout(function () {
    img.classList.add("show");
    text.classList.add("show");
  }, 2200);
});
//accordion
// Listen for click on the document
document.addEventListener("click", function (event) {
  //Bail if our clicked element doesn't have the class
  if (!event.target.classList.contains("accordion-toggle")) return;

  // Get the target content
  var content = document.querySelector(event.target.hash);
  if (!content) return;

  // Prevent default link behavior
  event.preventDefault();

  // If the content is already expanded, collapse it and quit
  if (content.classList.add("active")) {
    content.classList.remove("active");
    return;
  }

  // Get all open accordion content, loop through it, and close it
  var accordions = document.querySelectorAll(".accordion-content.active");
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove("active");
  }

  // Toggle our content
  content.classList.toggle("active");
  // hover effect
  var con = document.querySelectorAll(".accordion-content");
  var tog = document.querySelectorAll(".accordion-toggle");

  for (var i = 0; i < tog.length; i++) {
    if (con[i].classList.contains("active")) {
      tog[i].classList.add("active");
    } else {
      tog[i].classList.remove("active");
    }
  }
});
// scroll to top

let up = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY > 600) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};

up.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// end