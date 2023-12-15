"use strict";
exports.__esModule = true;
var CriciketCoach_1 = require("./CriciketCoach");
var GolfCoach_1 = require("./GolfCoach");
var cricketCoach = new CriciketCoach_1.CricketCoach();
var golfCoach = new GolfCoach_1.GolfCoach();
var theCoaches = [];
theCoaches.push(cricketCoach);
theCoaches.push(golfCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoaches = theCoaches_1[_i];
    console.log(tempCoaches.getDailyWorkout());
}
