/*function sayHello() {
    console.log("Hello world!");
    console.log("헬로 월드!");
}

sayHello();
*/
function getGreeting() {
    return "Hello world!";
}

//console.log(getGreeting());
/*
const f = getGreeting;
console.log(f());


const o = { f: getGreeting};
console.log(o.f());
console.log(typeof getGreeting);


const arr = [1, 2, 3];
arr[1] = getGreeting; // arr is [1, function getGreeting(), 3].
console.log(arr[0] + "\t" + arr[1]() + "\t" + arr[2]);
console.log(arr.length);

function f(x) {
    console.log(`f 내부: x=${x}`);
    x = 5;
    console.log(`f 내부: x=${x} (할당 후)`);
}

let x = 3;
console.log(`f를 호출하기 전: x=${x}`);
f(x);
console.log(`f를 호출한 다음: x=${x}`);

console.log("\n\n\n\n");

function f(o) {
    o.message = `f 안에서 수정함 (이전 값: '${o.message}')`;
}
let o = {
    message: "초기 값",
};

console.log(`f를 호출하기 전: o.message= "${o.message}"`);
f(o);
console.log(`f를 호출한 다음: o.message= "${o.message}"`);
*/

function f(o) {
    o.message = "f에서 수정함";
    o = {
        message: "새로운 객체!",
    };

    console.log(`f 내부: o.message = "${o.message}" (할당 후)`);

};
let o = {
    message: "초기 값",
};

console.log(`f를 호출하기 전: o.message= "${o.message}"`);
f(o);
console.log(`f를 호출한 다음: o.message= "${o.message}"`);


var a = {'id':1};
var b = a;
b = {'id': 2};  //새로운 객체를 생성
console.log(a.id); // 1 b가 새로운 객체를 생성했기 때문에 a에 있는 id(객체)의 결과값은 1


// Parameter
//Do parameters determine the function?
//many language function signature include parameter, example C language f() != f(x)
//but JS is no such differece


function f(x) {
    return `in f: x=${x}`;
}
console.log(f());  // in f: x=undefined


function getSentence({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

function getSentence_to_arr([subject, verb, object]) {
    return `${subject} ${verb} ${object}`;
}

const ST = {
    subject: "I",
    verb: "love",
    object: "JS",
};

const arr = ["I", "love", "JS"];

console.log(getSentence(ST));
console.log(getSentence_to_arr(arr));


// You can use the spread operator to take adventage of the extra parameters.

function addPrefix(prefix, ...words) {

    const prefixedWords = [];
    for(let i = 0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex"));


// default parameter
//Assgin default values to parameters

function f(a, b ="default", c = 3) {
    return `${a} - ${b} - ${c}`; 
};
f(5, 6, 7);  // 5 - 6 - 7
f(5, 6);  // 5 - 6 - 3
f(5);  // 5 - default - 3
f();  // undefined - default - 3


// property function in object

const Info  = {
    name: "Wallace",  //property primitive value
    //bark: function() { return 'Woof!';},
    bark() {return 'Woof!'},  //function property(method)
};

// this keyword

const Info2 = {
    name: "Wallace",
    speak() {return `My name is ${this.name}`},
};

console.log(Info2.speak());

// bad case avoid to this case

const speak = Info2.speak;
console.log(speak === Info2.speak);
console.log(speak());


// anonymous function

const anonyf = function() {

}

// if you need to recursion this way

const g = function f(stop) {
    if(stop) {
        console.log('f stopped');
        return;
    }
    f(true);
};

g(false);



// arrow notation

/*
const f1 = function() { return "hello!";}
const f1 = () => "hello!";

const f2 = function(name) { return `Hello, ${name}`;}
const f2 = name => `Hello ${name}`;

const f3 = function(a,b) {return a + b;}
const f3 = (a,b) =>  a + b;
*/

const getBackwards = {
    name: 'Julie',
    greetBackwards: function() {
        const getReverseName = () => {
            let nameBackwards = '';
            for(let i = this.name.length-1; i>=0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym ,olleH`;
    },
};

console.log(getBackwards.greetBackwards());

const bruce = {name: "Bruce"};
const madeline = {name: "madeline"};

function greet() {
    return `Hello, I'm ${this.name}`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
 //bruce는 이제 {name: "Bruce", birthYear: 1949, occupation:"singer"} 
 console.log(bruce);
 
 update.call(madeline, 1942, 'actress');
//madeline은 이제 {name: "Madeline", birthYear: 1942, occupation:"actress"}

update.apply(bruce, [1955, "actor"]);

console.log(bruce);
 
const arr2 = [2, 3, -5, 15, 7];
// this 자리에 null이 들어간 이유는 Math.min, Math.max함수는 this에 관계없이 동작하기 때문에
let min = Math.min.apply(null, arr2); 
let max = Math.max.apply(null, arr2);

console.log(min + "\t" + max);

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);  //apply(bruce, newBruce)와 같습니다.
console.log(Math.min(...arr2) + '\t' + Math.max(...arr2));

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");  //undefined ?????
updateBruce.call(madeline, 1274, "king"); // undefined ?????

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");


