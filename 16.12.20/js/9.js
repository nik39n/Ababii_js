alert(" Как вас зовут? ");
let firstQuestion = +prompt(" 1:Cергей\n 2:Андрей\n 3:Матвей ");
alert("Какой у вас холодильник");
let secondQuestion = +prompt(" 1: Samsung \n 2: Xiaomi \n 3: gree");
alert("Какой у вас рост?");
let thirdQuestion = +prompt("1: 143см \n 2: 180см \n 3:196см");
let result=0;
if (firstQuestion === 2){
    result += 2;
    
}
if(secondQuestion === 3){

    result+=2;
}
if (thirdQuestion === 2){
    result+=2;

}
console.log(result);