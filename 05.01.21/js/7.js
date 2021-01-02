function IsPowerN(K,N){
    if((K>0 && !isNaN(K))&&(N>1)){   
    } else {
        throw "Ведите коректно";
    }
    let E = Math.pow(N,K)
    if(Math.log(E)/Math.log(N)===K){
        console.log(" True ");
    } else{
        console.log(" False ")
    }
}
let number1 = +prompt(" Степеень ");
let number2 = +prompt(" Число ");

IsPowerN(number1,number2)