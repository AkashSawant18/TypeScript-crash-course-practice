import { Coach } from "./Coach";
import { CricketCoach } from "./CriciketCoach";
import { GolfCoach } from "./GolfCoach";

let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();

let theCoaches:Coach[] = [];

theCoaches.push(cricketCoach);
theCoaches.push(golfCoach);

for(let tempCoaches of theCoaches){
    console.log(tempCoaches.getDailyWorkout());
}
