//super

class Parent {
    name;

    constructor(name) {
        this.name = name;

    }

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age;

    constructor(name, age) {
        super(name); // 6번행의 constructor의 name을 사용한다는것을 super로써 명시해야함. 이로써 부모의 6번행함수를 먼저 사용하게함
        this.age = age;

    }

    hello() {
        console.log('hello', this.name, this.age);

    }
}

const p = new Parent('Mark');
const c = new Child('Mark', 37);

console.log(p,c); //Parent { name: 'Mark' } Child { name: 'Mark', age: 37 } -> 자식의 name은 부모의 6번행 constructor를 사용해서 만들고, age는 자식의것으로 따로 만든것



// static 상속


class Parent1 {
    static age = 37;
}

class Child1 extends Parent1{}

console.log(Parent1.age, Child1.age); //37 37


/*
상속구조

부모(클레스)  ----new----> 부모(instance)
    |                        |
    |                        |
    |                        |
    |                        |
    \/                       \/
자식(클레스)  ----new----> 자식(instance)

*/