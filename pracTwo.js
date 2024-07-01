var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.greeting = function () {
        console.log("Hello, my name is ".concat(this.name, ", i'm ").concat(this.age, " years old."));
    };
    return person;
}());
var alice = new person("alice", 30);
console.log(alice);
alice.greeting();
var square = /** @class */ (function () {
    function square(horizontal, vertical) {
        this.horizontal = horizontal;
        this.vertical = vertical;
        this.horizontal = horizontal;
        this.vertical = vertical;
    }
    square.prototype.calculateSize = function () {
        var size = this.horizontal * this.vertical;
        return size;
    };
    square.prototype.report = function () {
        console.log("this square size is ".concat(this.calculateSize()));
    };
    return square;
}());
var fourByFour = new square(4, 4);
console.log(fourByFour);
fourByFour.report();
console.log(fourByFour.calculateSize());
var triangle = /** @class */ (function () {
    function triangle(angleOne, angleTwo, angleThree) {
        this.angleOne = angleOne;
        this.angleTwo = angleTwo;
        this.angleThree = angleThree;
        this.angleOne = angleOne;
        this.angleTwo = angleTwo;
        this.angleThree = angleThree;
    }
    triangle.prototype.isTriange = function () {
        if (this.angleOne + this.angleTwo + this.angleThree === 180) {
            return "this is triangle :)";
        }
        else {
            return "this is not triangle :(";
        }
    };
    return triangle;
}());
var yesTriangle = new triangle(60, 40, 80);
var noTriangle = new triangle(90, 60, 60);
console.log(yesTriangle);
console.log(noTriangle);
console.log(yesTriangle.isTriange());
console.log(noTriangle.isTriange());
