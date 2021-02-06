const body = document.body;
const head = document.querySelector(".head_div");
const main = document.querySelector(".second_div");
const chicken = document.querySelector(".chicken");
const cloth = document.querySelector(".cloth");
const shop = document.querySelector(".shop")
let isOpened = false;
head.addEventListener("click", function () {
  if (isOpened) {
    main.style.display = "none";
    isOpened = false;
    console.log("5678");

  } else {
    main.style.display = "block";
    isOpened = true;
    console.log("862");

  }
  
});
chicken.addEventListener("click", function(){
  let temp = chicken.innerHTML; 
  head.textContent = temp;
  main.style.display = "none";
  isOpened = false;

});
cloth.addEventListener("click", function(){
  let temp = cloth.innerHTML; 
  head.textContent = temp;
  main.style.display = "none";
  isOpened = false;

});
shop.addEventListener("click", function(){
  let temp = shop.innerHTML; 
  head.textContent = temp;
  main.style.display = "none";
  isOpened = false;
});

// body.addEventListener("click",function(){
//     console.log("1234");
//     main.style.display = "none";
//     isOpened = true;

// });

