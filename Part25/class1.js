//class를 이용한 객체 생성 (ES6부터)

//선언적 방식
class A {}
console.log(new A()); // A {}

//클레스 표현식을 변수에 할당
const B = class {};
console.log(new B); // B {}

/*new c();

class C{};  -> c is not defined 오류발생 -> 호이스팅이 발생하지 않음!
*/


// Constructor (생성자)

class AA {}

console.log(new AA()); //AA {}

class BB {
    constructor() {
        console.log('constructor');
    }
}

console.log(new BB()); // BB를 호출하면서 'constructor'가 출력된 후, 객체 BB {}가 출력


class CC {
    constructor(name,age) {
        console.log('constructor', name, age);  // name과 age라는 인풋 벨류를 출력 
    }
}

console.log(new CC('mark',37)); // CC객체를 만들면서 constructor mark 37가 constructor함수에 내부문에 의해 출력, 이후 만들어진 CC객체를 출력
console.log(new CC()); //constructor undefined undefined -> 객체를 만들면서 넣어야할 인자에 아무런값을 넣지 않아, 출력될 name, age값이 없기때문