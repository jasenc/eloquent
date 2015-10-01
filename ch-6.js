/*
Eloquent JavaScript
Chapter 5 Solutions
Higher-order Functions

Jasen Carroll
Oct 1, 2015
*/

/* A Vector Type:

Write a constructor Vector that represents a vector in two-dimensional space.
It takes x and y parameters (numbers), which it should save to properties of the
same name.

Give the Vector prototype two methods, plus and minus, that take another vector
as a parameter and return a new vector that has the sum or difference of the two
vectors’ (the one in this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the
vector—that is, the distance of the point (x, y) from the origin (0, 0).

*/

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(plusVector) {
  var newVector = new Vector(0, 0);
  newVector.x = this.x + plusVector.x;
  newVector.y = this.y + plusVector.y;
  return "Vector{x: " + newVector.x + ", y: " + newVector.y + "}";
};

Vector.prototype.minus = function(minusVector) {
  var newVector = new Vector(0, 0);
  newVector.x = this.x - minusVector.x;
  newVector.y = this.y - minusVector.y;
  return "Vector{x: " + newVector.x + ", y: " + newVector.y + "}";
};


Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    a = Math.pow(this.x, 2);
    b = Math.pow(this.y, 2);
    c = Math.sqrt(a + b);
    return c;
  }
});

// Note: I am going to stop printing the author's answers, I will explain if
// anything differs.
console.log("#### A Vector Type ####");
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
