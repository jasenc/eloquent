/*
Eloquent JavaScript
Chapter 9
Regular Expressions


Jasen Carroll
Oct 6, 2015
*/

/* I'm going to break form and make some notes up in here. GASP!

Regular expressions should be contained within forward slashes - /abc/

Brackets can be used to denote "any" and a "-" can be used to denote a range.
console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true

\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline

^ can be used for "except" this is also known as "inverting" a set of char.
But only inside of the brackets!!

+ can be used for char repitiion.

* wildcard (obvi).

? can be used for "optional".

{4} requires four repitions.

{2,4} requires two to four repitions.

{,5} zero to five.

{5,} more than five.

(sub)+ means the sub string in parenthesis can be repeated.

/i makes the string case insensitive.

^ marks the start of a string and $ marks the end of a string.

\b can be used to make sure something starts and ends with a word boundary.
A word boundary is when a word character is up against a non word character.

The | character denotes a choice between the pattern to its left and its right.

+, *, ?, and {} are greedy, the want to match everything first. To prevent this
use them as +?, *?, ??, {}? to make them match the smallest amount first.

*/

/* RegExp Golf

For each of the following items, write a regular expression to test whether any
of the given substrings occur in a string. The regular expression should match
only strings containing one of the substrings described. Do not worry about
word boundaries unless explicitly mentioned. When your expression works, see
whether you can make it any smaller.
*/

verify(/ca(r|t)/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/p(|r)op/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/rr(e|y|a)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/(i|a)ci/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\./,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/nto/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/(p|b)l/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);

console.log("#### RegExp Golf ####");
var count;
function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s)) {
      count += 1;
      console.log("Failure to match '" + s + "'");
    }
  });
  no.forEach(function(s) {
    if (regexp.test(s)) {
      count += 1;
      console.log("Unexpected match for '" + s + "'");
    }
  });
}
if (count !== 'undefined') {
  console.log("All systems pass!");
} else console.log("Not all systems passed...");
console.log("");


/* Quoting Style

Imagine you have written a story and used single quotation marks throughout to
mark pieces of dialogue. Now you want to replace all the dialogue quotes with
double quotes, while keeping the single quotes used in contractions like aren’t.

Think of a pattern that distinguishes these two kinds of quote usage and craft
a call to the replace method that does the proper replacement.

*/

console.log("#### Quoting Style ####");
var text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text + "conerts to:");
console.log(text.replace(/(^|\W)'|'($|\W)/g, '$1"$2'));
console.log("");


/* Numbers again

A series of digits can be matched by the simple regular expression /\d+/.

Write an expression that matches only JavaScript-style numbers. It must support
an optional minus or plus sign in front of the number, the decimal dot, and
exponent notation—5e-3 or 1E10— again with an optional sign in front of the
exponent. Also note that it is not necessary for there to be digits in front of
or after the dot, but the number cannot be a dot alone. That is, .5 and 5. are
valid JavaScript numbers, but a lone dot isn’t.

*/

// This is kind of verbose, but it's what I got...
var number = /^((-|\+)?\d+(\.?|\.(\d+)?|(\.\d+)?e(\+|-)?\d+))$|^(\.\d+)$/i;
var count2;

console.log("#### Numbers Again ####");
// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s)) {
    count2 += 1;
    console.log("Failed to match '" + s + "'");
  }
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s)) {
    count2 += 1;
    console.log("Incorrectly accepted '" + s + "'");
  }
});
if (count2 !== 'undefined') {
  console.log("All systems pass!");
} else console.log("Not all systems passed...");
console.log("");
