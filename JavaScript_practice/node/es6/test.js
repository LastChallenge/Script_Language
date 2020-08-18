'use strict';
//es6 기능: 블록 스코프 변수 선언

const sentences = [
    {subject: 'JavaScript', verb: 'is', object: 'great'},
    {subject: 'Elephants', verb: 'are', object: 'large'},
];


function say({subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}`);
}

for(let s of sentences) {
    say(s);
}