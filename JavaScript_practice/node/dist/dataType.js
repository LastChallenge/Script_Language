"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var str = "hello";
str = "world";
console.log(str);
var dialog = 'Sam looked up, and "hello, old friend!", as Max walked in.';
var impreative = "Don't do that!"; // const dialog2 = "Sam looked up and said "don't do that!" to Max."; Error

var dialog2 = "Sam looked up and said \"don't do that!\" to Max.";
var dialog3 = 'Sam looked up and said "don\'t do that!" to Max.';
var s = "In JavaScript, use \\ as an escape character in strings.";
var r = "Windows line 1 \r\n Windows line2";
console.log(r);
var interpolation = "interpolation";
var $ = "New in ES6: ".concat(interpolation); //const $ = `New in ES6: \${interpolation}`;  Escape

console.log($);
var result1 = 3 + '30';
var result2 = 3 * '30';
console.log(result1 + '\t' + result2);
var heating = true;
var cooling = false; // cooling = "false";  true!!!

var RED = Symbol("The color of a sunset!");
var ORANGE = Symbol("The color of a sunset!");
console.log(RED === ORANGE);
var symbolProperty = Symbol('key');
var ob = {};
ob[symbolProperty] = 'value';
console.log(ob[symbolProperty] === 'value');
console.log(_typeof(symbolProperty) === 'symbol');
console.log(ob);
var nullVar = null;
console.log(typeof nullVar === null); //object === null -> flase! then result of false

console.log(nullVar === null); //null === null then result of true 

var currentTemp;
var targerTemp = null;
currentTemp = 19.5;
currentTemp = undefined;
console.log(targerTemp + '\n' + currentTemp);
var obj = {};
console.log(obj);
obj.color = "yellow";
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]);
console.log(obj["color"]);
var SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj);
var sam1 = {
  name: 'Sam',
  age: 4
};
var sam2 = {
  name: 'Sam',
  age: 4
};
var sam3 = {
  name: 'Sam',
  classification: {
    kingdom: 'Anamalia',
    phylum: 'Chordata',
    "class": 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfamily: 'Felinae',
    genus: 'Felis',
    species: 'catus'
  }
};
console.log(sam3.classification.family);

sam3.speak = function () {
  return "Meow!";
};

console.log(sam3.speak());
var hello = "hello"; //console.log(s.toUpperCase());

var a1 = [1, 2, 3, 4];
var a2 = [1, 'two', 3, null];
var a3 = ["What the hammer? what the chain?", "In what furnace was thy brain?", "What the anvil? What dread grasp"];
var a4 = [{
  name: "Ruby",
  hardness: 9
}, {
  name: "Diamond",
  hardness: 10
}];
var a5 = [[1, 2, 3], [2, 4, 6]];
var now = new Date();
console.log(now);
var halloween = new Date(2016, 9, 31); //월은 0에서 시작한다. 즉 9는 10월

console.log('halloween' + ' ' + halloween);
var halloweenParty = new Date(2016, 9, 31, 19, 0); //19:00 == 7:00 pm

console.log('halloweenParty' + ' ' + halloweenParty);
/* change data type */

var numStr = "33.3";
console.log(Number(numStr)); // if String is Not Number then return to NaN

var b = true;
var n = b ? 1 : 0;
var arr = [1, true, "hello"];
console.log(arr.toString());