
let grades=[80,80,80,80];

function average(arr){
  
    let sum=0;


    for(let i=0;i<arr.length;i++){
        sum =sum + arr[i];
    }

    return (sum/arr.length);

}
console.log(average(grades));
