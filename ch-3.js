/*
Eloquent JavaScript
Chapter 3 Solutions

Jasen Carroll
Sept 25, 2015
*/


/* Minimum:

Write a function min that takes two arguments and returns their minimum.

*/

function min(a, b) {
  console.log("Minimum");
  if (a < b) { console.log(a) }
  else { console.log(b) }
  console.log("");
};

min(0, 10);
min(0, -10);

/* FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100,
with three exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, for numbers divisible by 5 (and not 3), print "Buzz" instead, then for
numbers divisable by both 3 and 5 print "FizzBuzz".

*/
