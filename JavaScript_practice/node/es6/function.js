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