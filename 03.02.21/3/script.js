const imgs = document.querySelector("#picture");
const nextButton = document.querySelector("#test");
const picture = document.getElementsByClassName("picture")
const previous_button = document.querySelector(".previous_button");
let i = 0;
nextButton.addEventListener("click", function(){ 
  i++;
  if(i===4){
    i=3;
  }
  picture[i-1].style.display = "none";
  picture[i].style.display = "flex";
 

});
previous_button.addEventListener("click" , function(){
  i--;
  if(i===-1){
    i=0;
  }
  picture[i].style.display = "flex";
  picture[i+1].style.display = "none";
  

});