

function calculateDiscount(price,customerType,isHoliday){

    let finalPrice;
    if(price<5000){
    //original price is the final price//no discount
         finalPrice=price;
    }
    else if(price>5000 && customerType==="Regular"){
       finalPrice= price - (price * (5/100));
       //final price has a 5% discount

    }

    else if(price>5000 && customerType==="Member"){
       finalPrice= price - (price * (10/100));
       //final price has a 5% discount

    }
    
    else if(price>5000 && customerType==="VIP"){
       finalPrice= price - (price * (20/100));
       //final price has a 20% discount

       if(isHoliday==true){
          finalPrice = finalPrice - (finalPrice * 0.05)
       }
    }


    return finalPrice;
}


console.log(calculateDiscount(2000)); 
console.log(calculateDiscount(6000,"Regular"));
console.log(calculateDiscount(6000,"Member"));
console.log(calculateDiscount(6000,"VIP"));
console.log(calculateDiscount(6000,"VIP",true));