
let review: number[] = [4,5,4.5,3,3.5];

let total:number=0;

for(let i =0; i<review.length;i++){
    total += review[i]
    console.log(review[i]);
}

let average:number = total / review.length;
console.log("Average is : "+average);