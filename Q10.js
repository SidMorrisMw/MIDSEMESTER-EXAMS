

function negative(arr){
      
    let count=0;
    for(let i=0;i<arr.length;i++){

        if(arr[i]<0){
            count++;
        }
    }

    return count;
}

let test=[-3,5,-19,-1000];

console.log(negative(test));