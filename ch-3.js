/*
Eloquent JavaScript
Chapter 3 Solutions

Jasen Carroll
Sept 25, 2015
*/

/* Print Function

I'm writing a function to print the functions.

*/

function print(name, func) {
  console.log(name + ": " + func);
  console.log("");
}


/* Minimum:

Write a function min that takes two arguments and returns their minimum.

*/

function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log("#### Minimum ####");
print("min(0, 10)", min(0, 10));
print("min(0, -10)", min(0, -10));

/* Recursion

Define a recursive function to determine whether a number is even or odd.

*/

function isEven(num) {
  if (num === 0) return "even";
  else if (num === 1) return "odd";
  else return isEven(num - 2);
}

console.log("#### Recursion ####");
print("isEven(50)", isEven(50));
print("isEven(75)", isEven(75));
// The following call will provide "RangeError: Maximum call stack size exceeded"
// print("Recursion (is even?)", isEven(-1));


/* Bean Counting

Write a function countBs that takes a string as its only argument and returns a
number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it
takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters).

*/

function countBs(string) {
  var count = 0;
  for (var i  = 0; i < string.length; i++) {
    if (string[i] === "B") {
      count += 1;
    }
  }
  return count;
}

function countChar(string, char) {
  var count = 0;
  for (var i  = 0; i < string.length; i++) {
    if (string[i] === char) {
      count += 1;
    }
  }
  return count;
}

console.log("#### Bean Counting ####");
print("countBs('BBC')", countBs("BBC"));
print("countChar('kakkerlak', 'k')", countChar("kakkerlak", "k"));
