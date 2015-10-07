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

^ marks the start of a string and ! marks the end of a string.

\b can be used to make sure something starts and ends with a word boundary.
A word boundary is when a word character is up against a non word character.

The | character denotes a choice between the pattern to its left and its right.

+, *, ?, and {} are greedy, the want to match everything first. To prevent this
use them as +?, *?, ??, {}? to make them match the smallest amount first.
*/
