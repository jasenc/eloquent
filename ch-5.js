/*
Eloquent JavaScript
Chapter 5 Solutions
Higher-order Functions

Jasen Carroll
Sept 28, 2015
*/

// Import data used in chapter 5.
var ancestryFile = require('./ancestry');
var ancestry = ancestryFile.ancestry;

/* Flattening:

Use the reduce method in combination with the concat method to “flatten” an
array of arrays into a single array that has all the elements of the input arrays.

*/

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log("#### Flattening ####");
console.log("[[1, 2, 3], [4, 5], [6]]");
// Here, we are passing an anonymous function to the reduce method.
// The function uses the callback from reduce to pass the previousValue (or
// initial value) along with the current value.
console.log(arrays.reduce(function(a, b) {
  return a.concat(b);
}));
console.log("");


/* Mother-child Age Difference

Using the example data set from this chapter, compute the average age
difference between mothers and children (the age of the mother when the child
is born). You can use the average function defined earlier in this chapter.

*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function getMotherAge(array) {
  var motherAge = [];
  array.forEach(function(person){
    mother = person.mother;
    var motherBorn;
    array.forEach(function(otherPerson){
      if (mother === otherPerson.name) {
        motherBorn = otherPerson.born;
      }
    });
    // Make sure the year the mother was born was returned, not undefined.
    if (typeof motherBorn == 'number') {
      motherAge.push(person.born - motherBorn);
    }
  });
  return motherAge;
}

var momAges = getMotherAge(ancestry);
console.log("#### Mother-child Age Difference ####");
console.log("The correct answer is: 31.2");
console.log("My returned answer is: " + average(momAges).toFixed(1));
console.log("");
