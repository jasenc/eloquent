/*
Eloquent JavaScript
Chapter 8
Bugs and Error Handling


Jasen Carroll
Oct 6, 2015
*/

/* Retry

Say you have a function primitiveMultiply that, in 50 percent of cases,
multiplies two numbers, and in the other 50 percent, raises an exception of
type MultiplicatorUnitFailure. Write a function that wraps this clunky function
and just keeps trying until a call succeeds, after which it returns the result.

Make sure you handle only the exceptions you are trying to handle.
*/

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      console.log("Incorrect, trying again.");
      return reliableMultiply(a, b);
    } else throw e;
  }

}

console.log("#### A Vector Type ####");
console.log(reliableMultiply(8, 8));
console.log("");

/* The Locked Box

Write a function called withBoxUnlocked that takes a function value as argument,
unlocks the box, runs the function, and then ensures that the box is locked
again before returning, regardless of whether the argument function returned
normally or threw an exception.

*/

var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  // Get the locked status of the box
  var lockedBox = box.locked;
  // If it is unlocked, run our function.
  if (!lockedBox) return body;

  // Otherwise unlock the box.
  box.unlock();
  // Try running our function.
  try {
    return body();
  } finally {
    // And make sure we lock the box again.
    box.lock();
  }
}

console.log("#### The Locked Box ####");
console.log("Let's put some gold in the lock box.");
withBoxUnlocked(function() {
  box.content.push("gold piece");
  console.log(box.content);
});


try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Is the box locked?!");
  });
} catch (e) {
  console.log("Oh no! ", e);
}
console.log(box.locked);
// → true
