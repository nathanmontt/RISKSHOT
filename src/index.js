'use strict'

// Caso não funcione sem, usar a função DOMContentLoaded:
 
document.addEventListener("DOMContentLoaded", function () {
    const changeColors = document.querySelectorAll(".chng-color");
    const btnCtaModes = document.getElementById("btn-cta-change-modes");

    btnCtaModes.addEventListener("click", function () {
        alert("Hello World!")
    });
});