// new object

const a = new Object();

console.log(a, typeof a); //{} object

const b = new Object(true);

console.log(b, typeof b); //[Boolean: true] object

const c = new Object({name : 'mark'});

console.log(c, typeof c); //{ name: 'mark' } object 


function Person(name,age) {
    this.name = name;
    this.age = age;
    // this.hello = function() {
    //     console.log('hello', this.name, this.age);
    // }
}

Person.prototype.hello = function() {
    console.log('hello', this.name, this.age);
}

const p = new Person("Mark", 37);

/*
p.hello(); //hello Mark 37
console.log(p.toString()); //[object Object]

console.log(Person.prototype); //{}
console.log(Person.prototype.toString); //[Function: toString]
console.log(Person.prototype.constructor); //[Function: Person] -> 함수자체를 의미
console.log(Person.prototype.hello); // undefined , 주석처리된 부분을 함수로사용하면 [Function (anonymous)] 출력

console.log(Object.prototype); //[Object: null prototype] {} -> 프로토타입은 빈 객체
console.log(Object.prototype.toString); //[Function: toString] -> 상위에 있는 prototype.hello에 의해 이미 생긴 함수
console.log(Object.prototype.constructor); //Function: Object] 오브젝트라고하는 기본객체의 생성자 함수.

// p가 Person으로부터 나온 인스턴스인지 그 사실여부를 확인
console.log(p instanceof Person); // true 
console.log(p instanceof Object); // true -> 즉 p라는 객체는 Person이라는 생성자함수에서 프로토타입 체인을 받아온 후에 내가 설정한 함수를 통해 생성된것.

//아니 이게도데체 뭔소리야 나중에 다시 공부해야함...
*/
console.log('------------------');
console.log(Person.prototype.constructor);