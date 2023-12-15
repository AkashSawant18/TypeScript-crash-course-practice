import { Shape } from "./shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";



let myCircle = new Circle(5,10,20);

let myRectangle = new Rectangle(0,0,3,7);

let theShapes:Shape[] = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShapes of theShapes){
    console.log(tempShapes);
    console.log("the Area is :"+tempShapes.calculateArea());
}


