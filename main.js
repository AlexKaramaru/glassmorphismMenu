const maker = document.querySelector("#maker");
const item = document.querySelectorAll("ul li a");

function Indicator(e) {
  maker.style.left = e.offsetLeft + "px";
  maker.style.width = e.offsetWidth + "px";
}

item.forEach((Link) => {
  Link.addEventListener("mousemove", (e) => {
    Indicator(e.target);
  });
});
