"use strict";

let colors = ["red", "black", "purple", "yellow", "green", "blue", "orange"];

let button = document.getElementById("button");

/* getelement by id we dont have to specify that it is id */

button.addEventListener("click", function () {
  let index = parseInt(Math.random() * colors.length + 1); //parseint will return integer

  let canvas = document.getElementById("canvas");

  canvas.style.background = `${colors[index]}`; //taking colors
});
