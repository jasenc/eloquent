/*
Eloquent JavaScript
Chapter 6 Solutions
The Secret Life of Objects

Jasen Carroll
Oct 1, 2015
*/

// Including necessary functions from Chapter 6

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};


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
console.log("");

/* Another Cell:

Implement a cell type named StretchCell(inner, width, height) that conforms to
the table cell interface described earlier in the chapter. It should wrap
another cell (like UnderlinedCell does) and ensure that the resulting cell has
at least the given width and height, even if the inner cell would naturally be
smaller.

*/

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}
StretchCell.prototype.minWidth = function() {
  if (this.inner.minWidth() >= this.width) {
    return this.inner.minWidth();
  } else return this.width;
};
StretchCell.prototype.minHeight = function() {
  if (this.inner.minHeight() >= this.height) {
    return this.inner.minHeight();
  } else return this.height;
};
StretchCell.prototype.draw = function() {
  return this.inner.draw(this.minWidth(), this.minHeight());
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

/* Sequence Interface:

Design an interface that abstracts iteration over a collection of values. An
object that provides this interface represents a sequence, and the interface
must somehow make it possible for code that uses such an object to iterate over
the sequence, looking at the element values it is made up of and having some way
to find out when the end of the sequence is reached.

When you have specified your interface, try to write a function logFive that
takes a sequence object and calls console.log on its first five elements—or
fewer, if the sequence has fewer than five elements.

Then implement an object type ArraySeq that wraps an array and allows iteration
over the array using the interface you designed. Implement another object type
RangeSeq that iterates over a range of integers (taking from and to arguments
to its constructor) instead.

*/
