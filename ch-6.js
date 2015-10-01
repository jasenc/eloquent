/*
Eloquent JavaScript
Chapter 6 Solutions
The Secret Life of Objects

Jasen Carroll
Oct 1, 2015
*/

// Imports of Data and necessary functions from Chapter 6

var mountainsFile = require('./data/mountains');
var mountains = mountainsFile.mountains;

function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

function UnderlinedCell(inner) {
  this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1)
    .concat([repeat("-", width)]);
};

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      return new TextCell(String(row[name]));
    });
  });
  return [headers].concat(body);
}


/* A Vector Type:

Write a constructor Vector that represents a vector in two-dimensional space.
It takes x and y parameters (numbers), which it should save to properties of the
same name.

Give the Vector prototype two methods, plus and minus, that take another vector
as a parameter and return a new vector that has the sum or difference of the two
vectors’ (the one in this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the
vector—that is, the distance of the point (x, y) from the origin (0, 0).

*/

function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(plusVector) {
  var newVector = new Vector(0, 0);
  newVector.x = this.x + plusVector.x;
  newVector.y = this.y + plusVector.y;
  return "Vector{x: " + newVector.x + ", y: " + newVector.y + "}";
};
Vector.prototype.minus = function(minusVector) {
  var newVector = new Vector(0, 0);
  newVector.x = this.x - minusVector.x;
  newVector.y = this.y - minusVector.y;
  return "Vector{x: " + newVector.x + ", y: " + newVector.y + "}";
};
Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    a = Math.pow(this.x, 2);
    b = Math.pow(this.y, 2);
    c = Math.sqrt(a + b);
    return c;
  }
});

// Note: I am going to stop printing the author's answers, I will explain if
// anything differs.
console.log("#### A Vector Type ####");
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
console.log("");

/* Another Cell:

Implement a cell type named StretchCell(inner, width, height) that conforms to
the table cell interface described earlier in the chapter. It should wrap
another cell (like UnderlinedCell does) and ensure that the resulting cell has
at least the given width and height, even if the inner cell would naturally be
smaller.

*/

// function StretchCell(inner, )
