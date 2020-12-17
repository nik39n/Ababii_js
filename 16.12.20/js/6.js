let usdMoney = +prompt("Введите количество USD");
let convertInto = prompt("Ведите  в какую валюту перевести:AZN или EUR или UAN");
if (isNaN(usdMoney)){
    throw "Ошибка ввода";
}
switch(convertInto){
    case "AZN":
        console.log((usdMoney*1,693)+" AZN");
        break;
    case "EUR":
        console.log((usdMoney*0,82)+" EUR");
        break;
    case "UAN":
        console.log((usdMoney*27,77)+" UAN")
        break;
}