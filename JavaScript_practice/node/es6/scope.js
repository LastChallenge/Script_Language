//lexical scope 정적 스코프 

let name = 'zero';

function log() {
    console.log(name);
}

function wrapper() {
    name = 'nero';
    log();
}

log();
wrapper();


//global scope 

/*안좋은 예시  don't depend on global scope

let name = "Irena";  //global
let age = 25;  //global
*/

//그나마 좋은 방법...? better then before case

let user = {
    name: "Irena",
    age: 25,
};

function greet(user) {
    console.log(`Hello, ${user.name}`);
}

function getBirthYear(user) {
    return new Date().getFullYear() - user.age;
}


//block scope

console.log('before block');
function inside() {
    console.log('inside block');
    const x = 3;
    console.log(this.x);
}
//console.log(`outside block; x=${x}`);  //ReferenceError: x는 정의되지 않았습니다.


//variable masking

console.log('\n\n');

{
    //block 1
    const x = 'blue';
    console.log(x);  //"blue"
}
console.log(typeof x); // "undefined"
{
    //block 2
    const x = 3; 
    console.log(x); // "3"
}


{
    //외부 블록
    let x = 'blue';
    console.log(x);
    {
        //내부 블록
        let x = 3;
        console.log(x);
    }
    console.log(x);
}
console.log(typeof x); // "undefined"

console.log('\n\n');


// 너무 햇갈린다.. 
{
    //외부 블록
    let x = {color: "blue"};
    let y = x;  //y와 x는 같은 객체를 가리킵니다.
    let z = 3;

    {
        //내부 블록
        let x = 5;  //이제 바깥의 x는 가려졌습니다.
        console.log(x);  // 5
        console.log(y.color); // "blue"; y가 가리키는, 외부 스코프의 x가 가리키는 객체는 스코프 안에 있다..
        y.color = "red";
        console.log(z); //z는 숨겨지지 않음 (내부 블록에서 변수 선언이 없었기 때문인듯..)
    }
    console.log(x.color); //"red" 객체는 내부스코프에서 수정됨.
    console.log(y.color); //"red" x와 y는 같은 객체를 가리킵니다.
    console.log(z); 
}