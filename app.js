const form = document.querySelector(".form"); 
const input = document.querySelectorAll(".form__input"); 
const errorMsg = document.querySelectorAll(".form__error-msg"); 
const errorIcon = document.querySelectorAll(".form__error-icon");


form.addEventListener("submit", (e) => {
    reset(); 
    let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input[0].value.length === 0) {
        e.preventDefault(); 
        input[0].classList.add("form__input--error-underline")
        errorMsg[0].classList.add("visible")
        errorIcon[0].classList.add("visible")
    }
    if (!input[1].value.match(mailRegex)) {
        e.preventDefault(); 
        input[1].classList.add("form__input--error-underline")
        errorMsg[1].classList.add("visible")
        errorIcon[1].classList.add("visible")
    }
    if (input[2].value.length === 0) {
        e.preventDefault(); 
        input[2].classList.add("form__input--error-underline")
        errorMsg[2].classList.add("visible")
        errorIcon[2].classList.add("visible")
    }
})

function reset() {
    input.forEach((input, index) => {
        input.classList.remove("form__input--error-underline"); 
        errorMsg[index].classList.remove("visible");
        errorIcon[index].classList.remove("visible"); 
    })
}