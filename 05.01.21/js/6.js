function IsPrime(N){
    if(N<1 && !isNaN(N)){
        throw (" Ведите коректно ");
    }
    let counter = 0;
    for(let i=0;i<10;i++){
        if (N%i===0){
            counter++;
        }
    }
    if (counter >2){
        console.log(" Это не простое число ");
    } else {
        console.log(" Это простое число ");
    }
}
let number = +prompt(" Ведите число простое ")
IsPrime(number);