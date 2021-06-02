//생성자 함수

function A () {}

const a = new A();
console.log(a, typeof a); //A {} object
console.log(A()); //undefined

function B (name,age) {
    console.log(name,age);
}

const b = new B(); //undefined undefined
const c = new B("mark", 23); //mark 23
console.log(B()); //undefined undefined , undefined

