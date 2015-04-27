var i = require("./intersect.js");

var line1 = {x1: -20, y1: -20, x2: 20, y2: 20};
var line2 = {x1: -4, y1: 5, x2: 6, y2: 0};
print2(line1, line2);

var line2 = {x1: -20, y1: 20, x2: 10, y2: -10};
print2(line1, line2);

var line1 = {x1: -20, y1: -20, x2: 20, y2: 20};
var line2 = {x1: -4, y1: 5, x2: 6, y2: 0};
print2(line1, line2);


function print2(line1, line2) {
  console.log(i.checkLineIntersection(line1.x1,line1.y1,line1.x2,line1.y2,line2.x1,line2.y1,line2.x2,line2.y2));
}

