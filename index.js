document.addEventListener("DOMContentLoaded", function () {
    const textClickMe = document.querySelector(".test")

    textClickMe.addEventListener("click", function () {
        console.log("clicado!")
    })
});