function Even(K){
    let flag;
    if (K%2 === 0){
        flag = true;
    } else {
        flag = false;
    }
    return flag;
}
let K = +prompt(" Ведите число,если вернуло True то число четное, если вернуло False-число нечетное");
console.log(Even(K));
let k = 0;
for(let i=0;i<10;i++){
    if (i%2===0){
        k+=1;
    }
}
console.log("Честных числе в диапазон между 1 и 10: "+k);