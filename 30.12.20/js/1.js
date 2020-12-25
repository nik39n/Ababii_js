let car={
    manufacturer: "BMW",
    model: "317",
    yearOfManufacture:"2016",
    avarageSpeed: "100" ,
    outputInformation: function(){
        return "\nБренд: " +this.manufacturer+" \nМодель: "+ this.model+"\nГод выпуска: "+this.yearOfManufacture+"\nСредняя скорость:  "+this.avarageSpeed;
    },
    countTimeRange: function(distance){
        let result = distance/+this.avarageSpeed;
        let stopTime = Math.floor(result/4);
        if (stopTime>0)  {
            result+=stopTime;
        } 
        return result;
    }
}
let distance = +prompt("Ведите длину которую надо проехать");
console.log(car.outputInformation());
console.log(car.countTimeRange(distance));