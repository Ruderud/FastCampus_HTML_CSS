
//객체 리터럴 
//객체를 만들때 각 요소를 문자열, 불린형등으로 직접 써서 만다는것을 객체 리터럴을 이용한 객체 작성이라고 한다

const a = {};

console.log(a, typeof a);

const b = {
    name: "mark",
};

const c = {
    name: "mark",
    hello1() {
        console.log('hello1', this) //hello1, {name:'mark', hello1: [Function: hello1] ...} 꼴로 출력. this를 통해 c객체의 프로퍼티 전체를 나열하게된다.
    },
    hello2: function() {
        console.log('hello2', this)
    },
    hello3: () => {
        console.log('hello3', this)
    },
};

c.hello1();
c.hello2();
c.hello3();

//표준 내장 객체 
//object, function, new등의 기본적으로 내장되어있는 기본 객체들.

const d = new Array('red', 'black', 'white');

console.log(d, typeof d);   // []로 싸여서 나옴.
console.log(d instanceof Array); //true -> 즉 d는 Array의 인스턴스이다
console.log(d instanceof Object); //true -> 또한 d는 Object의 인스턴스이기도 하다

const e = ['r', 'g', 'b'];

console.log(e, typeof e);
console.log(e instanceof Array); //t
console.log(e instanceof Object); //t

console.log(e.slice(0,1)); //['r'] -> 인덱스기준 0번이상, 1번미만 -> 0번만  가져옴
console.log(Array.prototype.slice, Object.prototype.slice); 
        // Function: slice] -> Array.prototype.slice는 함수이다!
        // undefined -> Object.prototype.slice 는 Object에 있는것이 아니다! object를 프로토 타입 체인으로 받아온 Array가 따로 또 구현을 추가한 함수가 slice이기 때문에 undefined가 출력된다
