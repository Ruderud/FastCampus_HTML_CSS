
//함수 구조

//함수이름을 먼저 선언하고 함수내용 작성 - 함수선언문

/*
function functionName(inPutValue) {
    console.log("inner text");
}

console.log(functionName(), typeof functionName());
*/

//변수를 선언하고 함수를 그 변수에 할당 - 함수표현식 (익명함수를 만들어 변수에 할당) 
// -> 호이스팅에 의해, 함수를 할당한 변수가 먼저 선언되기 전에 해당 변수를 부르면 오류가 발생.

/*

var = fc2;

fc1();  -> 정상실행
fc2();  -> fc2 is not a function -> fc2가 var로 인해 변수로써 설정은 되어있는 상태지만 함수가 아니기에 오류
fc3();  -> fc3 is not defined -> fc3라는것 자체가 아직 만들어져있지 않아서 오류


function fc1() {

}

fc2 = function() {

}

const fc3 = function () {

}


*/


//생성자 함수로 함수를 만드는 방법 (익명함수를 만들고 이를 변수에 할당하는 방식. 잘쓰이지는 않음)

const test3 = new Function ('a','b','c', 'return a+b+c');

console.log(test3(1,2,3))


global.valueA = 0;

{
    const valueA = 1;

    const test4 = new Function('return valueA');

    console.log(test4()); //스코프가 이 박스내가 아니라, 글로벌로 잡혀버려서, 0이 출력된다
}

{
    const valueA = 2;

    const test5 = function () {
        return valueA;
    };

    console.log(test5()); //스코프가 이 박스내부가 되어서, 글로벌 valueA가 아닌 박스내의 valueA를 가져와서 2를 출력한다
}

//arrow function (선언식으로 쓸수가없기에 항상 익명함수로써만 사용된다)

const test6 = () => {       //매개변수를 사용하지 않으면 ()사용
    console.log("test6함수실행");
};

const test7 = valueB => {       //매개변수 1개면 () 생략가능
    console.log('test7실행', valueB);
};

const test8 = (valueC, valueD) => {       //매개변수 2개이상은 ()사용
    console.log('test8실행', valueC, valueD);
};

const test9 = valueE => {
    return `test9 ${valueE}`;
}

const test10 = valueF => `test9 ${valueF}`;  //한줄짜리로쓰면 return 생략가능. 이렇게 체이닝하면 간결해짐.


// new 생성자함수를 이용한 새로운객체 생성

function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

const man = new Person('Mark', 37);

console.log(man, man.name, man.age);

const woman = new Person('Anna', 25);

console.log(woman, woman.name, woman.age);

//그러나 화살표함수는 new 생성자 함수를 사용할 수 없다. 함수내에서 this가 생기지 않기 때문임.

const Cat = (name, age) => {
    console.log(this);
    this.name = name;
    this.age = age;
}

//const c = new Cat('냥이', 1); -> TypeError: Cat is not a constructor; this에 넣어줄 프로퍼티값이 없기때문에 이러한 오류가 발생함.

// 함수 return에 새로운 함수를 만들어집어넣어, 새로운 함수의 결과값으로써 출력하게 할 수도 있음

// 함수를 인자로하여 함수를 호출할 수도 있음

function test11(c) {
    console.log('hello');
    c();
}

test11 (function() {
    console.log('콜백');
});                         //test11의 hello가 먼저 출력되고, 그다음 입력된 test11의 내부입력함수인 c()가 작동해서 콜백이 출력된다.