function AddLeftDigit(D,K){
    let K1 = String(D)+K;
    return K1;
}
let K = +prompt("К какому числу добавляем");
let D1 = +prompt("Число которое добавляем");
console.log(AddLeftDigit(D1,K));
let D2 = +prompt("Число которое добавляем");
console.log(AddLeftDigit(D2,AddLeftDigit(D1,K)));