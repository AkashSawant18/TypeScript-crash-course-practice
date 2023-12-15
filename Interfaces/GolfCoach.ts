import { Coach } from "./Coach";

export class GolfCoach implements Coach {
    getDailyWorkout(): string {
        return `Practice your swing and focus on your game. Remember to keep your head up and your posture straight.`;
    }

}