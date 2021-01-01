function AddRightDigit(D,K){
    let K1 = K+String(D);
    return K1;
}
let K = +prompt("К какому числу добавляем");
let D1 = +prompt("Число которое добавляем");
console.log(AddRightDigit(D1,K));
let D2 = +prompt("Число которое добавляем");
console.log(AddRightDigit(D2,AddRightDigit(D1,K)));