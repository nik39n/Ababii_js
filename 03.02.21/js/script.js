const body = document.body;
const count = document.querySelector("#count");
const button = document.querySelector("#button");
let i = 1;
button.addEventListener("click", function(){
    count.textContent = i;
    i++;
});