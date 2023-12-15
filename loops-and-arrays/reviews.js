var review = [4, 5, 4.5, 3, 3.5];
var total = 0;
for (var i = 0; i < review.length; i++) {
    total += review[i];
    console.log(review[i]);
}
var average = total / review.length;
console.log("Average is : " + average);
