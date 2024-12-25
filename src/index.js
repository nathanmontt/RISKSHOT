'use strict'

// Caso não funcione sem, usar a função DOMContentLoaded:
 
// document.addEventListener("DOMContentLoaded", function () {
//     const changeColors = document.querySelectorAll(".chng-color");
//     const toggleModes = document.getElementById("btn-cta-change-modes");

//     toggleModes.addEventListener("click", function () {
//         if (changeColors == null) {
//             window.alert("NULL!")
//         } else {
//             changeColors
//             // changeColors.style.display = "none";
//         }
//     });
// });

// A maioria dos comentários eu vou deixar aqui, porque ainda não sei muito sobre JavaScript e vou usando isso como estudo.

// Em uma das situações, eu tinha colocado o if (element.classList.contains('change-COLOR')) antes do foreach. Colocar esse ANTES do if. Ou seja: rodar todos os elementos antes e DEPOIS aplicar o que a gente quer em CADA UM DELES INDIVUDUALMENTE.

// Esse é só um dark mode simples. Na prática, com certeza não é assim que faz. Até porque imagina um e-commerce imenso com dark mode tendo que mudar elemento por elemento!

const colorChange = document.querySelectorAll(".change-COLOR");
const symbolChange = document.querySelector(".change-SYMBOL");
const btn = document.getElementById("btn-cta-change-modes");

const darkModeLetters = "#ffffff";
const darkModeBg = "#2c2c2c";

const whiteModeBg = "#ffffff";
const body = document.querySelector('body')

btn.addEventListener("click", function () {
    colorChange.forEach (element => {
        if (element.classList.contains('change-COLOR')) {
            element.classList.remove('change-COLOR')

            body.style.backgroundColor = darkModeBg;
            element.style.color = darkModeLetters;

            symbolChange.src = "./assets/icons/dot-dark-mode.png"
        } else {
            element.classList.add('change-COLOR')

            body.style.backgroundColor = whiteModeBg;
            element.style.color = 'black';
            
            symbolChange.style.width = '1.5em';
            symbolChange.src = "./assets/icons/dot-white-mode.png";
        }
    })
});