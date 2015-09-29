/*
Eloquent JavaScript
Chapter 5 Solutions
Higher-order Functions

Jasen Carroll
Sept 28, 2015
*/

// Import data used in chapter 5.
var ancestryFile = require('./data/ancestry');
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

/* Historical Life Expectancy

Compute and output the average age of the people in the ancestry data set per
century. A person is assigned to a century by taking their year of death,
dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

*/

// This is a sweet little function...
function averageLifeExpectancy(array) {
  // Let's create an object to hold all of our information.
  var centuryGroups = {};
  // For each person in our array,
  array.forEach(function(person){
    // capture the century they died in,
    century = Math.ceil(person.died/100);
    // as well as their age.
    age = person.died - person.born;
    // If our object doesn't have that century as a key yet,
    if (!(century in centuryGroups)) {
      // create a key with that century as an empty array.
      centuryGroups[century] = [];
    }
    // Push the age of that individual person to our array representing the
    // ages of people who died in that century.
    centuryGroups[century].push(age);
  });
  // Since our function name is averageLifeExpectancy, we'll need to get the
  // average of each century. Each array can be accessed by accessing each key
  // of our data object.
  for (var key in centuryGroups) {
    // Set each array equal to the average of itself.
    // Note: This average function can be seen above on line 41.
    centuryGroups[key] = average(centuryGroups[key]);
  }
  // It's a lot more eloquent looking without the comments though...
  return centuryGroups;
}

var providedAnswers = {
  16: 43.5,
  17: 51.2,
  18: 52.8,
  19: 54.8,
  20: 84.7,
  21: 94
};

var myAnswers = averageLifeExpectancy(ancestry);

console.log("#### Historical Life Expectancy ####");
console.log("Provided Answers:");
for (var key in providedAnswers) {
  console.log(key + ": " + providedAnswers[key]);
}
console.log("");
console.log("My Answers:");
for (var key in myAnswers) {
  console.log(key + ": " + myAnswers[key].toFixed(1));
}
console.log("");

/* Every And Then Some

Rewrite the methods 'every' and 'some' as functions that accept an array as
the first function as opposed to the method.

*/
function divisable3(item) {
  if (item % 3 === 0) return true;
  else return false;
}

function every(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    passed.push(test(array[i]));
  }
  for (test in passed) {
    if (passed[test] === false) return false;
  }
  return true;
}

function some(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    passed.push(test(array[i]));
  }
  for (test in passed) {
    if (passed[test] === true) return true;
  }
  return false;
}

var everySomeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];


console.log("#### Every And Then Some ####");
console.log("array = [" + everySomeArray + "]");
console.log("Is every item in the array divisable by three? " + every(everySomeArray, divisable3));
console.log("Are some items in the array divisable by three? " + some(everySomeArray, divisable3));
