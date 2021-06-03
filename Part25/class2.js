//맴버 변수 (객체의 프로퍼티)

'use strict';

class A {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new A('mark', 29)); //A { name: 'mark', age: 29 }

//class field 방법 

class B {
    name;   //아직 값을 할당하지않아서 undefined가 예상
    age;
}

console.log(new B()); // B { name: undefined, age: undefined } -> node 12버전 / 크롬 72이하는 문법적 오류발생

class C {
    name = 'no name';
    age = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new C('mark',28)); //C { name: 'mark', age: 28 } -> constructor에 의해 각 key에 해당하는 value를 할당

//맴버 함수

class AA {
    hello1() {
        console.log('hello1', this); // hello1 (여기부터this) AA { hello2: [Function: hello2] }
    }

    hello2 = () => {
        console.log('hello2', this); //hello2 AA { hello2: [Function: hello2] }
    }
}

new AA().hello1();
new AA().hello2();

class BB {
    name = 'mark';

    hello() {
        console.log('hello', this.name);
    }
}

new BB().hello(); //hello mark
