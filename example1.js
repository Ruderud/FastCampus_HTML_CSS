

const a = new Boolean(false);

console.log(a,'는', typeof a);      // a는 boolean(false)라는 오브젝트값이 되었다. (boolean()함수에 false가 들어간 상태의 오브젝트)

const b = Boolean(false);

console.log(b,'는', typeof b)       // 'falses 는 boolean' 이라는 primitive value(원시값)이 출력된다.


let a1 = null;

let b1 = undefined;

console.log(a1==b1);    // ==비교시에는 null과 undefined가 같게 취급되지만, ===으로 비교시에는 false가 된다.

let c = NaN

console.log(c, typeof c); //NaN을 숫자형으로 인식

let d = Number("mark");

console.log(d, typeof d); //mark를 숫자형으로 바꾸려했으나, 해당하는 숫자가 없으므로 NaN이 출력되고 이는 숫자형이다.

let e = "MuYa";

let f = `${e}ho`; //MuYa + ho가 되어 MuYaho가 출력된다.  이는 백틱(``)사이에 왼쪽과 같이 입력해야 사용가능하다는것 
                    //+ 백틱입력은 opt+₩ 키로 입력가능
console.log(f);

const g = Symbol("mark");
const h = Symbol("mark");

console.log(g == h);    //false가 출력된다. 들어가있는 값은 같다고 심볼자체는 고유한것이기때문에 (동명이인을 생각) 내용이 같다고 true가 반환되지는 않는다

//new Symbol(); // -> 에러가 나타난다. 만들어진 symbol은 고유한것이기에 new를 사용해서 새로만들어낼 수 없음

/* 
new는 유사한 객체를 여러개만들때 사용하는 생성자 함수이다.


*/


if (false) console.log ("출력이 안되는 문구"); // false, 0, ''(빈문자열), null, indefined, NaN -> falsy한 값들
if (true) console.log ("출력이 되는 문구"); // true, -38, 'mark', {}, [] -> truesy한 값들
// -> 위처럼 한줄문장인경우, 중괄호{}로 싸지않아도 ㄱㅊ

// if (n>0) {
//     console.log('n>0일때');
// } else if (n = 0) {
//     console.log('n=0일때');
// } else {
//     console.log('n<0일때');
// }

// const multipleOfThree = (n % 3 == 0);
// const multipleOfFive = (n % 3 == 0);

// if (multipleOfThree && multipleOfFive) {
//     console.log('15의 배수')
// } else if (multipleOfThree) { 
//     console.log('3의 배수')
// } else if (multipleOfFive) {
//     console.log('5의 배수') 
// } else {
//     console.log('3의 배수도 아니면서, 5의 배수도 아니다')
// }

//논리 연산자 &&(and), ||(or), !(not)

// A && B 일경우, 조건평가는 A -> B 순서로 이루어지고, A가 참이어야 B를 수행한다. 반대로 A가 거짓이면 B는 확인 시도도 안한다.

// A || B 일때는 A가 거짓이어야 B를 확인시도한다. 반대로 A가 참이면 이미 참이므로 뒤 표현식인 B는 확인 시도도 안한다.


/*
조건문
? -> 조건이 참이면 실행되는 표현식
: -> 조건이 거짓이면 실행되는 표현식
*/

let five = 5;

console.log(five % 5 == 0 ? '5의 배수이다' : '5의 배수가 아니다');
console.log(five % 3 == 0 ? '3의 배수이다' : '3의 배수가 아니다');

let switchTest = 3;

switch (switchTest % 3) {   //()내의 값이 무엇인지 {}조건코드를 비교해서 실행함. default: 뒤의값은 항상 참으로 인식하고 실행하는 블럭임
    case 0: {
        console.log('3의 배수');
        //break; 가 있다면 여기 케이스에서 끝남
    }
    default: {
        console.log(switchTest);
    }
}


//반복문

/*
for (초기화;반복조건;반복된 후 실행할 코드) {
    반복되는 코드 블럭
}

ex)

for  (a;b;c) {
    d
}
e
실행순서: a->d->c->d->c->...->d->c->b->e

for (;;) {
    d
    if (e) {
        break;
    }
}
(;;)조건은 d를 무한히 수행하는 무한루프문이되고, if조건문의 조건 e에 의해 멈춘다
*/

/*
while (a) {
    b
}

a조건이 거짓이 될때까지 b를 계속 수행함

do {
    a
    while (b) {
        c
    }
}

a를 무조건 한번 수행하고 그다음 b조건이 거짓이 될때까지 c를 계속반복한다.
*/


//for of 는 iterable한 반복문

for (const test1 of [1,2,3]) {
    console.log(test1);
}                               //1 2 3이 순차적으로 출력

//for in 은 모든 프로퍼티를 for of처럼 돌릴수있음

Object.prototype.test2 = function() {};

for (const test2 in {"a":1, "b":2, "c":3}) {
    console.log(test2);
}                               // a b c test2가 순차적으로 출력된다. 이떄 test2는 152행의 prototype의 프로퍼티인 test2 객체명이다.