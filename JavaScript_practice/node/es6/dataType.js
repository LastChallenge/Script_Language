let str = "hello";
str ="world";

console.log(str);

const dialog = 'Sam looked up, and "hello, old friend!", as Max walked in.';
const impreative ="Don't do that!";

// const dialog2 = "Sam looked up and said "don't do that!" to Max."; Error

const dialog2 = "Sam looked up and said \"don't do that!\" to Max.";
const dialog3 = 'Sam looked up and said "don\'t do that!" to Max.';

const s = "In JavaScript, use \\ as an escape character in strings.";

const r = "Windows line 1 \r\n Windows line2";

console.log(r);

let interpolation = "interpolation"

const $ = `New in ES6: ${interpolation}`;

//const $ = `New in ES6: \${interpolation}`;  Escape

console.log($);


const result1 = 3 + '30';
const result2 = 3 * '30';

console.log(result1 + '\t' + result2);


let heating = true;
let cooling = false;

// cooling = "false";  true!!!

const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");

console.log(RED === ORANGE);

var symbolProperty = Symbol('key');

var ob = {};

ob[symbolProperty] = 'value';

console.log(ob[symbolProperty] === 'value');
console.log(typeof symbolProperty === 'symbol');

console.log(ob);


var nullVar = null;

console.log(typeof nullVar === null);
//object === null -> flase! then result of false

console.log(nullVar === null);
//null === null then result of true 


let currentTemp;
const targerTemp = null;
currentTemp = 19.5;
currentTemp = undefined;

console.log(targerTemp + '\n' + currentTemp);

const obj = {};

console.log(obj);


obj.color = "yellow";

obj["not an identifier"] = 3;
console.log(obj["not an identifier"]);
console.log(obj["color"]);

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj);


const sam1 = {
    name:'Sam',
    age: 4,
};

const sam2 = {name:'Sam', age: 4,};

const sam3 = {
    name:'Sam',
    classification: {
    kingdom: 'Anamalia',
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfamily: 'Felinae',
    genus: 'Felis',
    species: 'catus',
    },
};

console.log(sam3.classification.family);

sam3.speak = function() { return "Meow!";};

console.log(sam3.speak());


const hello = "hello";
//console.log(s.toUpperCase());

const a1 = [1,2,3,4];
const a2 = [1, 'two', 3, null];
const a3 = [
    "What the hammer? what the chain?",
    "In what furnace was thy brain?",
    "What the anvil? What dread grasp",
];

const a4 = [
    {name: "Ruby", hardness: 9},
    {name: "Diamond", hardness: 10},
];

const a5 = [
    [1, 2, 3],
    [2, 4, 6],
];


const now = new Date();
console.log(now);

const halloween = new Date(2016, 9, 31); //월은 0에서 시작한다. 즉 9는 10월
console.log('halloween' + ' ' + halloween);

const halloweenParty = new Date(2016, 9, 31, 19, 0);  //19:00 == 7:00 pm
console.log('halloweenParty' + ' ' + halloweenParty);


/* change data type */

const numStr = "33.3";
console.log(Number(numStr));  // if String is Not Number then return to NaN

const b = true;
const n = b ? 1 : 0;

const arr = [1, true, "hello"];
console.log(arr.toString());