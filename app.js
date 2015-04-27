var i = require("./intersect.js");

var line1 = {x1: -20, y1: -20, x2: 20, y2: 20};
var line2 = {x1: -4, y1: 5, x2: 6, y2: 0};
print2(line1, line2);

var line2 = {x1: -20, y1: 20, x2: 10, y2: -10};
print2(line1, line2);

var line1 = {x1: -20, y1: -20, x2: 20, y2: 20};
var line2 = {x1: -4, y1: 5, x2: 6, y2: 0};
print2(line1, line2);

var l3 = i.getLine({x: line1.x1, y:line1.y1}, 45);
line1.x2 = l3.x;
line1.y2 = l3.y;
print2(line1, line2);

var l4 = i.getLine({x: line1.x1, y:line1.y1}, 90);
line1.x2 = l4.x;
line1.y2 = l4.y;
print2(line1, line2);

function print2(line1, line2) {
  console.log(line1);
  console.log(line2);
  console.log(i.checkLineIntersection(line1.x1,line1.y1,line1.x2,line1.y2,line2.x1,line2.y1,line2.x2,line2.y2));
  console.log(i.getDistance({x: line1.x1, y: line1.y1}, {x: line2.x1, y: line2.y1}));
}

