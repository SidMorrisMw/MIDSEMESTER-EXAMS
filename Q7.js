


let languge="Tumbuka";

//using an if statement
if(languge==="Chichewa"){
    console.log("Muli bwanji?");
}
else if(languge==="Yao"){
    console.log("Muli Uli?");
}
else if(languge==="Tumbuka"){
    console.log("Muli wuli?");
}
else{
    console.log("Unrecognised Language");
}



//using switch 

let language2="Chichewa";

switch(language2){
    case "Chichewa":
         console.log("Muli bwanji?");
         break;

    case "Tumbuka" :
          console.log("Muli wuli?");
          break;

    case "Yao":
          console.log("Muli Uli?");
          break;

          default:
            console.log("Unrecognised Language");

}