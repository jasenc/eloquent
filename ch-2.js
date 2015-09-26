/*
Eloquent JavaScript
Chapter 2 Solutions

Jasen Carroll
Sept 25, 2015
*/


/* Looping a Triangle:

Write a loop that makes seven calls to console.log to output the following
triangle:

#
##
###
####
#####
######
#######

*/

function triangleLoop() {
  console.log("Looping a Triangle");
  string = "";
  for (var i = 0; i < 7; i++) {
    string += "#";
    console.log(string);
  }
  console.log("");
};

triangleLoop();

/* FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100,
with three exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, for numbers divisible by 5 (and not 3), print "Buzz" instead, then for
numbers divisable by both 3 and 5 print "FizzBuzz".

*/

function fizzBuzz() {
  console.log("FizzBuzz");
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + ". FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i + ". Fizz");
    } else if (i % 5 === 0) {
      console.log(i + ". Buzz");
    }
  }
  console.log("");
};

fizzBuzz();

/* Chess Board

Write a program that creates a string that represents a grid of given size,
using newline characters to separate lines. At each position of the grid there
is either a space or a “#” character. The characters should form a chess board.

*/

function chessBoard(size) {
  console.log("Chess Board");
  if (size % 2 !== 0) console.log("This is going to be a whacky, uneven, chess board!")
  string = "";
  for (var i = 1; i <= size; i ++) {
    for (var j = 1; j <= size; j++) {
      if (i % 2 === 0 && j % 2 === 0) string += " ";
      else if (i % 2 === 0 || j % 2 === 0) string += "#";
      else string += " ";
    }
    string += "\n";
  }
  console.log(string);
};

chessBoard(8);
