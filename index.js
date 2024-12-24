'use strict'

/* Por algum motivo, o JS só funciona com essa função de DOMContentLoaded. Como iniciante, não entendi ao certo do porquê não funciona sem, então deixarei aí */
document.addEventListener("DOMContentLoaded", function () {
    const textClickMe = document.querySelector(".test")

    textClickMe.addEventListener("click", function () {
        console.log("clicado!")
    })
});