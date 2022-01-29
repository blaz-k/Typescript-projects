"use strict";
// Basic types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
// Array
let ids = [1, 2, 3];
let arr = [1, true, "hello"];
// Tuple
let person = [1, "Blaz", true];
// Tuple Array
let employee;
employee = [
    [1, "blaz"],
    [2, "laura"]
];
// Union
let pid = 5;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
console.log(Direction.down);
const user = {
    id: 1,
    name: "blaz"
};
// Type Assertion
let cid = 1;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
