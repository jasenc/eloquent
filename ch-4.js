/*
Eloquent JavaScript
Chapter 4 Solutions
Data Structures: Objects and Arrays

Jasen Carroll
Sept 28, 2015
*/

/* Print Function

I'm writing a function to print the functions.

*/

function print(name, func) {
  console.log(name + ": " + func);
  console.log("");
}


/* The Sum of A Range:

Write a range function that takes two arguments, start and end, as well as an
optional third, step, and returns an array containing all the numbers from start
up to (and including) end.

Then write a sum function that calculates the sum of all of the numbers
contained in the array.

*/

function range(a, b, step) {
  var rangeArray = [];
  if (a < b) {
    // if the type of step is not undefined, leave it alone, otherwise assign 1.
    step = typeof step !== 'undefined' ?  step : 1;
    for (var i = a; i <= b; i += step) {
      rangeArray.push(i);
    }
    return rangeArray;
  } else {
    // if the type of step is not undefined, leave it alone, otherwise assign 1.
    step = typeof step !== 'undefined' ?  step : -1;
    for (var j = a; j >= b; j += step) {
      rangeArray.push(j);
    }
    return rangeArray;
  }
}

function sum(array) {
  var sumTotal = 0;
  for (var i = 0; i < array.length; i++) {
    sumTotal += array[i];
  }
  return sumTotal;
}


console.log("#### The Sum of A Range ####");
print("sum(range(1, 10))", sum(range(1, 10)));
print("range(5, 2, -1)", range(5, 2));

/* Reversing an Array

Write two functions, reverseArray and reverseArrayInPlace. The first takes an
array as an argument and produces a new array that has the same elements in the
inverse order. The second does what the reverse method does, reversing the
elements of the given array.

*/

function reverseArray(array) {
  var reversedArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
  halfArray = Math.floor(array.length/2);
  for (var i = 0; i <= halfArray; i++) {
    var holder = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = holder;
  }
  return array;
}

console.log("#### Reversing an Array ####");
print("reverseArray(['A','B','C'])", reverseArray(['A','B','C']));
print("reverseArrayInPlace([1,2,3,4,5])", reverseArrayInPlace([1,2,3,4,5]));

/* A List

Write a function arrayToList that builds up a list of arrays. Conversely also
write listToArray that converts a list of arrays to a single array. Also write
the helper function prepend, which takes an element and a list and creates a new
list that adds the element to the front of the input list, and nth, which takes
a list and a number and returns the element at the given position in the list,
or undefined when there is no such element. Make sure nth is recursive.

*/

function prepend(element, list) {
  var newList = {};
  // Unecessary if statement to print exactly what Eloquent JS asks for as the
  // solution to this problem.
  if (Object.keys(list).length === 0) {
    newList = {
      value: element,
      rest: null
    };
    return newList;
  } else {
    newList = {
      value: element,
      rest: list
    };
    return newList;
  }
}

function arrayToList(array) {
  var list = {};
  for (var i = array.length - 1; i >= 0; i--) {
    list = prepend(array[i], list);
  }
  return list;
}

function listToArray(list) {
  var array = [];
  // Tricky for loop for objects. Let's set our iterating variable equal to
  // our list; for as long as our list exists; when you get to our list's
  // 'rest' key skip to the next node.value.
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function nth(list, position) {
  if (position === 0) return list.value;
  else {
    position -= 1;
    return nth(list, position);
  }
}

console.log("#### A List ####");
// I can't seem to use string interpolation on objects...
console.log("arrayToList([10, 20]):");
console.log(arrayToList([10, 20]));
console.log("");
console.log("listToArray(arrayToList([10, 20, 30])):");
console.log(listToArray(arrayToList([10, 20, 30])));
console.log("");
console.log("nth(arrayToList([10, 20, 30]), 1):");
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log("");

/* Deep Comparison

The == operator compares objects by identity. But sometimes, you would prefer to
compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they
are the same value or are objects with the same properties whose values are also
equal when compared with a recursive call to deepEqual.

*/

function deepEqual(a, b) {
  // If both arguments aren't objects we can do a simple comparison.
  if (a === b) return true;
  else if (a === null || b === null) return false;
  else if (typeof a !== 'object' || typeof b !== 'object') return false;
  else {
    if (Object.keys(a).length === Object.keys(b).length) {
      for (var key in a) {
        return deepEqual(a[key], b[key]);
      }
    } else return false;
  }
}

var obj = {here: {is: "an"}, object: 2};

console.log("#### Deep Comparison ####");
console.log("obj:");
console.log(obj);
console.log("");
console.log("deepEqual(obj, obj):");
console.log(deepEqual(obj, obj));
console.log("");
console.log("deepEqual(obj, {here: 1, object: 2}):");
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log("");
console.log("deepEqual(obj, {here: {is: 'an'}, object: 2}):");
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
