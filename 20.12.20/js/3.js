let number = +prompt(" Ведите число ");
let extend = +prompt(" Ведите степень ");
let temp = number;
let i = 1;
while(i!==extend){
    number*=temp;
    i++;
}
console.log(number);