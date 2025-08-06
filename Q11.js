///literal object 
const order={

   orderid: "ORD-201",
   customer :{
    id:"C1",
    name:"Martin",
    email:"martin@gmail.com",

   },
   address:{
    street:"45 Chichiri",
    city:"Lilongwe",
    country:"Malawi",
    postalcode:265
   },
   items:[
     {
        productid:"P1",
        name:"WirelessMouse",
        quantity:1,
        price:7500,

     }
,

      {
        productid:"P2",
        name:"Mechanical Keyboard",
        quantity:1,
        price:5500,
        
     }

   ],
   payment:{
    method:"MobileMoney",
    phone:"0999234203",
    transactionId:"Thsncs22",
    success:true

   },
   delivery:{
    method:"courier",
    status:"In Transit",
    estimatedDelivery:"2025-02-01"
   },

   discountCodes:["NEWUSER10","FRESHIP"],
   orderTotal:40500,
   createdAt:"2023-02-03",
   updatedAt:"2024-02-03"


};

// class Order{

//     this.discountCodes=["NEWUSER10","FRESHIP"],
//    this.orderTotal=40500,
//    this.createdAt="2023-02-03",
//    this.updatedAt="2024-02-03"


// }






//b
//.


const item1={
     productid:"P3",
        name:"Microphone",
        quantity:10,
        price:79900,
};

//adding new item
order.items.push(item1);
console.log(order.items);


//updating transaction id

order.payment.transactionId="TxNn-1002";
console.log(order.payment.transactionId);


let result;
for(let i=0;i<order.items.length;i++){

result =  + order.items[i].quantity * order.items[i].price;

}

console.log(result);

