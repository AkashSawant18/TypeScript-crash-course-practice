let sportsOne:string[]=["golf","cricket","tennis","swimming"];

sportsOne.push("Baseball");
sportsOne.push("football");

for(let i=0;i<sportsOne.length;i++){
   // console.log(sportsOne[i]);
}

//lets use simplified for loop
 for(let tempSport of sportsOne){
    if (tempSport == "cricket" || tempSport == "football") {
        console.log("My favourite sport :"+tempSport)
    }else{
        console.log(tempSport);
    }
 }