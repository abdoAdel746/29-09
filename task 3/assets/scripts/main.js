let colorpalete = ["red", "green", "orange", "black"];
let button = document.querySelectorAll("button");

button.forEach((e) => {
  e.addEventListener("click", () => {
    let textC = e.parentNode.parentNode.querySelector("h1").textContent;
    let randNum = Math.floor(Math.random() * 4);
    if (e.closest(".inc") != null) {
      e.parentNode.parentNode.querySelector("h1").textContent =
        parseInt(textC) + 1;
      e.parentNode.parentNode.style.background = colorpalete[randNum];
      e.parentNode.parentNode.querySelector("h1").style.color = "white";
    } else {
      if (parseInt(textC) >= 1) {
        e.parentNode.parentNode.querySelector("h1").textContent =
          parseInt(textC) - 1;
        e.parentNode.parentNode.querySelector("h1").style.color = "white";

        e.parentNode.parentNode.style.background = colorpalete[randNum];
      }
    }
  });
});
