"use strict";

var button = document.getElementById("theme");

button.onclick = function() {
  document.body.classList.toggle("darkMode");
}