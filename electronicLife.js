/*
Eloquent JavaScript
Chapter 7
Project: Electronic Life - build a virtual ecosystem, a little world populated
with critters that move around and struggle for survival.


Jasen Carroll
Oct 3, 2015
*/

// Create a plan for our world. #'s will represent walls and rocks, o's will
// be our critters.
var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

// Create a vector to represent coordinate pairs along our grid.
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

// Define the grid object with some basic methods.
function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}
Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width &&
         vector.y >= 0 && vector.y < this.height;
};
Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
};

// Define critter interface.

// Setting up random generator for simulations.
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Providing compass based directions.
var directionNames = "n ne e se s sw w nw".split();

function BouncingCritter() {
  this.direction = randomElement(directionNames);
}
BouncingCritter.prototype.act = function(view){
  if (view.look(this.direction) != " ") {
    // Find the next open space, if they aren't any return s (instead of null).
    this.direction = view.find(" ") || "s";
  }
  return {type: "move", direction: this.direction};
};

// Define the world object.

// Here we're going to be interacting with a legend, which is an object that
// tells us what each character in our map means. We'll create an element which
// by looking up the ch in our legend and instantiating. We can then add the
// .originChar property to our element to easily determine the origin character.
function elementFromChar(legend, ch) {
  if (ch == " ") return null;
  var element = new legend[ch]();
  element.originChar = ch;
  return element;
}

function World(map, legend) {
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++)
      grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
  });
}

function charFromElement(element) {
  if (element == null) return " "; // jshint ignore:line
  else return element.originChar;
}

World.prototype.toString = function() {
  var output = "";
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output += charFromElement(element);
    }
    output += "\n";
  }
  return output;
};

function Wall() {}

var world = new World(plan, {"#": Wall, "o": BouncingCritter});
console.log(world.toString());
