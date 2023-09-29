"use strict";
const dash = document.querySelector(".dash i");
const items = document.querySelector(".items");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

dash.addEventListener("click", (e) => {
  items.classList.toggle("items_nav");
  ul.classList.toggle("ul_nav");
  li.forEach((e) => {
    e.classList.toggle("li_nav");
  });
});

setInterval(() => {
  if(window.innerWidth > 700){
    items.classList.remove("items_nav");
    ul.classList.remove("ul_nav");
    li.forEach((e) => {
      e.classList.remove("li_nav");
    });
  }
}, 1);

