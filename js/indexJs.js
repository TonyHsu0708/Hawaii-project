//sticky navbar
let header = document.querySelector("header");
let navItem = document.querySelectorAll("header nav ul li a");
window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "#7CCECC";
    header.style.color = "white";
    header.style.opacity = "0.9";
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "white";
    }
  } else {
    header.style = "";
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "black";
    }
  }
});
