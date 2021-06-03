//상속

class Parent {
    name = "lee";

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child();
console.log(p, c); //Parent { name: 'lee' } Child { name: 'lee' } -> Child는 부모의 맴버함수를 그대로 받기때문에 name이라는 프로퍼티가 존재

c.hello(); //hello lee
c.name = 'anna';
c.hello(); //hello anna 

// 오버라이드

class Parent1 {
    name = "lee";

    hello() {
        console.log('hello', this.name);
    }
}

class Child1 extends Parent1 {
    age = 37;

    hello() {
        console.log('hello', this.name, this.age);

    }
}

const pp = new Parent1();
const cc = new Child1();

console.log(pp,cc); //Parent1 { name: 'lee' } Child1 { name: 'lee', age: 37 } 
cc.hello(); // hello lee 37 -> 이전에 상속만 받앗을때는 부모의 함수를 사용했지만, 자식에도 동일한 함수가있으면 뒤집어 씌워져서 자식의 함수를 사용

cc.name = 'Anna';
cc.hello(); //hello Anna 37