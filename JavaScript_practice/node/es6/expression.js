const x = +"5";
const x2 = -"5";

console.log(typeof x);
console.log(x2 + " " + typeof x2);

const s = "5";
const y = 3 + +s;  //The result of String merge occurs is 35.

const a1 = 0, a2 = 3, a3 = -1.5, a4 = -6.33;

console.log(-a1*1);
console.log(+a2*2);

console.log()

// Number
const n = 5;
const s2 = "5";

console.log(n === s2); //false
console.log(n !== s2); // true
console.log(n === Number(s2)); //true
console.log(n !== Number(s2)); //false
console.log(n == s2); // true Not recommend
console.log(n != s2); // false Not recommend

//Object
const a = {name: "an object"}; 
const b = {name: "an object"};

console.log(a === b);  // false -- Object always different
console.log(a !== b); // true
console.log(a == b);  // false Not recommend
console.log(a != b); // true Not recommend

const obj = {b: 2, c: 3, d: 4};

const {a,b,c} = obj; 

let a = 5, b = 10;

//if you want to swap two diffent number USE destructuring assignment(해체 할당)!!! GgolTip
[a, b] = [b, a];



