let midButton = document.querySelector("#btn5");
let firstBtn = document.querySelector("#btn1");
let secondBtn = document.querySelector("#btn2");
let thirdBtn = document.querySelector("#btn3");
let fourthBtn = document.querySelector("#btn4");
let sixthBtn = document.querySelector("#btn6");
let seventhBtn = document.querySelector("#btn7");
let eighthBtn = document.querySelector("#btn8");
let ninthBtn = document.querySelector("#btn9");

midButton.addEventListener("click", function() {
    [firstBtn.innerHTML, secondBtn.innerHTML, thirdBtn.innerHTML, 
    fourthBtn.innerHTML, sixthBtn.innerHTML, seventhBtn.innerHTML, 
    eighthBtn.innerHTML, ninthBtn.innerHTML] = 
    [fourthBtn.innerHTML, firstBtn.innerHTML, secondBtn.innerHTML,
    seventhBtn.innerHTML, thirdBtn.innerHTML, eighthBtn.innerHTML,
    ninthBtn.innerHTML, sixthBtn.innerHTML]; 
});