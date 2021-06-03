//static 변수, 함수 -> 객체가 아니고, 클래스의 변수와 함수

class A {
    static age = 37; //스테틱변수
    static hello() {
        console.log(A.age); //new A를 통한 객체가 아닌, 클레스 A의 변수
    }
}

console.log(A, A.age); //[class A] { age: 37 } 37
A.hello(); //37

class B {
    age = 27;
    static hello() {
        console.log(this.age); //원칙적으로는 말이 안되는 문법
    }
}

console.log(B, B.age); //[class B] undefined
B.hello(); // undefined
// new B().hello(); -> TypeError: (intermediate value).hello is not a function -> 즉 hello함수는 new로 만든 B 객체내의 함수가 아님!

class C {
    static name = '이 클레스의 이름은 C가 아니다'; //static name의 값이 클레스의 이름이 된다
}

console.log(C); // [class 이 클레스의 이름은 C가 아니다] { name: '이 클레스의 이름은 C가 아니다' }