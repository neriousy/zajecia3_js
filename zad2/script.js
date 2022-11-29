let increment = document.querySelector(".add");
let buttonSwitch = document.querySelector(".switch");
let spanElement = document.querySelector(".value");


increment.addEventListener("click", function(){
    // let innerValue = spanElement.innerHTML;
    // innerValue = parseInt(innerValue);
    // innerValue++;

    // spanElement.innerHTML = innerValue;

    spanElement.innerHTML++;

});

buttonSwitch.addEventListener("click", function(){
    spanElement.classList.toggle("red");
});