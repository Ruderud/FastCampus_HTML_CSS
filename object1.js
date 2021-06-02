
//값을 속성으로 넣기
function A () {
    this.name = "mark";
}

const a = new A();
console.log(a); //A { name: 'mark' }


//함수를 속성으로 넣기
function B() {
    this.hello = function() {
        console.log('hello')
    }
}
new B().hello(); //hello -> 객체에 함수가 들어감. 함수또한 객체이기때문에 저런방법으로 사용할 수 있음.