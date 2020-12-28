let buckshot = {
    numerator:10,
    denominator:20,
    sum:function(obj2){
       let amongDenominator = (this.denominator*obj2.denominator);
       let firstNumBuckshot = this.numerator*obj2.denominator;
       let firstNumBuckshot2 = this.denominator*obj2.numerator;
       let amongNumerator = firstNumBuckshot+firstNumBuckshot2;
       if(amongNumerator>amongDenominator){
            smaller=amongDenominator;
        }else if (amongNumerator<amongDenominator){
            smaller=amongNumerator;
        }else{
         smaller=amongNumerator
        }
         for (i=smaller;i>0; i--){
         if(amongDenominator%i===0 && amongNumerator%i===0 ){
            amongDenominator/=i;
            amongNumerator/=i;
        }
     }
       return amongNumerator+"/"+amongDenominator;

    },
    subtract:function(obj2){
        let amongDenominator = (this.denominator*obj2.denominator);
        let firstNumBuckshot = this.numerator*obj2.denominator;
        let firstNumBuckshot2 = this.denominator*obj2.numerator;
        let amongNumerator = firstNumBuckshot-firstNumBuckshot2;
        if(amongNumerator>amongDenominator){
            smaller=amongDenominator;
         }else if (amongNumerator<amongDenominator){
             smaller=amongNumerator;
         }else{
             smaller=amongNumerator
          }
         for (i=smaller;i>0; i--){
             if(amongDenominator%i===0 && amongNumerator%i===0 ){
              amongDenominator/=i;
              amongNumerator/=i;
             }
         }
        return  amongNumerator+"/"+amongDenominator;
    },
    multiply:function(obj2){
        let amongDenominator = (this.denominator*obj2.denominator);
        let amongNumerator = (this.numerator*obj2.numerator)
        if(amongNumerator>amongDenominator){
            smaller=amongDenominator;
         }else if (amongNumerator<amongDenominator){
             smaller=amongNumerator;
         }else{
             smaller=amongNumerator
          }
         for (i=smaller;i>0; i--){
             if(amongDenominator%i===0 && amongNumerator%i===0 ){
              amongDenominator/=i;
              amongNumerator/=i;
             }
         }
        return  amongNumerator+"/"+amongDenominator;
        
    },
    divide:function(obj2){
       let amongNumerator = this.numerator*obj2.denominator;
       let amongDenominator = this.denominator*obj2.numerator;
       let smaller =0;
       if(amongNumerator>amongDenominator){
          smaller=amongDenominator;
       }else if (amongNumerator<amongDenominator){
           smaller=amongNumerator;
       }else{
           smaller=amongNumerator
        }
       for (i=smaller;i>0; i--){
           if(amongDenominator%i===0 && amongNumerator%i===0 ){
            amongDenominator/=i;
            amongNumerator/=i;
           }
       }
       return amongNumerator+"/"+amongDenominator;
    },
    reduse:function(obj){
        let amongNumerator = obj.numerator;
        let amongDenominator = obj.denominator;
        if(amongNumerator>amongDenominator){
            smaller=amongDenominator;
         }else if (amongNumerator<amongDenominator){
             smaller=amongNumerator;
         }else{
             smaller=amongNumerator
          }
         for (i=smaller;i>0; i--){
             if(amongDenominator%i===0 && amongNumerator%i===0 ){
              amongDenominator/=i;
              amongNumerator/=i;
             }
         }
         return amongNumerator+"/"+amongDenominator;
    }
}
let buckshot2 = {
    numerator:10,
    denominator:20,
    sum:function(obj2){
        let amongDenominator = (this.denominator*obj2.denominator);
        let firstNumBuckshot = this.numerator*obj2.denominator;
        let firstNumBuckshot2 = this.denominator*obj2.numerator;
        let amongNumerator = firstNumBuckshot+firstNumBuckshot2;
        if(amongNumerator>amongDenominator){
             smaller=amongDenominator;
         }else if (amongNumerator<amongDenominator){
             smaller=amongNumerator;
         }else{
          smaller=amongNumerator
         }
          for (i=smaller;i>0; i--){
          if(amongDenominator%i===0 && amongNumerator%i===0 ){
             amongDenominator/=i;
             amongNumerator/=i;
         }
      }
        return amongNumerator+"/"+amongDenominator;
 
     },
     subtract:function(obj2){
         let amongDenominator = (this.denominator*obj2.denominator);
         let firstNumBuckshot = this.numerator*obj2.denominator;
         let firstNumBuckshot2 = this.denominator*obj2.numerator;
         let amongNumerator = firstNumBuckshot-firstNumBuckshot2;
         if(amongNumerator>amongDenominator){
             smaller=amongDenominator;
          }else if (amongNumerator<amongDenominator){
              smaller=amongNumerator;
          }else{
              smaller=amongNumerator
           }
          for (i=smaller;i>0; i--){
              if(amongDenominator%i===0 && amongNumerator%i===0 ){
               amongDenominator/=i;
               amongNumerator/=i;
              }
          }
         return  amongNumerator+"/"+amongDenominator;
     },
     multiply:function(obj2){
         let amongDenominator = (this.denominator*obj2.denominator);
         let amongNumerator = (this.numerator*obj2.numerator)
         if(amongNumerator>amongDenominator){
             smaller=amongDenominator;
          }else if (amongNumerator<amongDenominator){
              smaller=amongNumerator;
          }else{
              smaller=amongNumerator
           }
          for (i=smaller;i>0; i--){
              if(amongDenominator%i===0 && amongNumerator%i===0 ){
               amongDenominator/=i;
               amongNumerator/=i;
              }
          }
         return  amongNumerator+"/"+amongDenominator;
         
     },
     divide:function(obj2){
        let amongNumerator = this.numerator*obj2.denominator;
        let amongDenominator = this.denominator*obj2.numerator;
        let smaller =0;
        if(amongNumerator>amongDenominator){
           smaller=amongDenominator;
        }else if (amongNumerator<amongDenominator){
            smaller=amongNumerator;
        }else{
            smaller=amongNumerator
         }
        for (i=smaller;i>0; i--){
            if(amongDenominator%i===0 && amongNumerator%i===0 ){
             amongDenominator/=i;
             amongNumerator/=i;
            }
        }
        return amongNumerator+"/"+amongDenominator;
     },
     reduse:function(obj){
         let amongNumerator = obj.numerator;
         let amongDenominator = obj.denominator;
         if(amongNumerator>amongDenominator){
             smaller=amongDenominator;
          }else if (amongNumerator<amongDenominator){
              smaller=amongNumerator;
          }else{
              smaller=amongNumerator
           }
          for (i=smaller;i>0; i--){
              if(amongDenominator%i===0 && amongNumerator%i===0 ){
               amongDenominator/=i;
               amongNumerator/=i;
              }
          }
          return amongNumerator+"/"+amongDenominator;
     }
    
}

console.log(buckshot.sum(buckshot2));
console.log(buckshot.subtract(buckshot2));
console.log(buckshot.multiply(buckshot2));
console.log(buckshot.divide(buckshot2));
console.log(buckshot.reduse(buckshot2));


