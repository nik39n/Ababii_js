let buckshot = {
    numerator:10,
    denominator:20,
    sum:function(obj2){
        return this.buckshot.add(obj2);
    }
    
}
let buckshot2 = {
    numerator:10,
    denominator:20,
    
}

console.log(buckshot.sum(buckshot2));
