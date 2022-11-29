let increment = document.querySelector(".add");
let switchClass = document.querySelector(".switch");
let spanValue = document.querySelector(".value");


increment.addEventListener("click", function(){
    spanValue.innerHTML++;
});

switchClass.addEventListener("click", function(){
    spanValue.classList.toggle("red");
});