function Ball(ballType) {
    this.ballType = ballType ?? 'regular';
};

let ball1 = new Ball();
let ball2 = new Ball("super");

console.log(ball1);
console.log(ball2);