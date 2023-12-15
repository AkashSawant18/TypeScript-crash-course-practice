var sportsOne = ["golf", "cricket", "tennis", "swimming"];
sportsOne.push("Baseball");
sportsOne.push("football");
for (var i = 0; i < sportsOne.length; i++) {
    // console.log(sportsOne[i]);
}
//lets use simplified for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "cricket" || tempSport == "football") {
        console.log("My favourite sport :" + tempSport);
    }
    else {
        console.log(tempSport);
    }
}
