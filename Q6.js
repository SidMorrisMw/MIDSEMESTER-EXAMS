
let numbers=[10,30,45,76,10];

let searchValue=10;

// //it continues searching  after the first occurrence 
 //of the search value 

let index1=numbers[0];
for(let i=0;i<numbers.length;i++){

  if(numbers){

    if(searchValue==numbers[i]){
        index1=[i];
        continue;
    }
}
}

console.log(index1);




///using break ---
// //it stops searching just after the first occurrence 
// //of the search value 
let index=numbers[0];
for(let i=0;i<numbers.length;i++){

  if(numbers){

    if(searchValue==numbers[i]){
        index=[i];
        break;
    }
}
}

console.log(index);
