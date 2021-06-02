키워드: js에서 특정한 목적을 위해 예약어(다른 용도를 위해 이미 정해져있는것; var, if for...etc)로 설정되어있음

Future reserved word : 앞으로 사용될일을 예상하여 예약어로 빼둔것

식별자: 코드내 변수/함수/속성을 인식하는 문자열(숫자로 시작불가능, 공백사용불가능, 예약어 사용불가능 // $,_유니코드 문자(한글) 모두 사용가능)

```js
var name = 'mark'; //여기서의 name이 식별자.
/*주석*/

const //상수
let //변수
```



블록 스코프: { 블록 안 } 블록 밖 ; 블록안에서 선언한 상수,변수들은 블록 밖에서 쓸수없고, 반대로 블록 밖에서 선언한것은 안에서 사용가능

함수 스코프(var의 유효범위) : var는 블록스코프와는 달리, 블록안에서 선언한것을 블록밖의 밑라인에서 선언해서 사용할 수 있음(어색해지므로 이런건 지양)



hoisting : 아래에 있는 선언을 끌어올리는것.

​	위에서 함수를 선언하고 아래에서 사용하는것이 아닌, 아래에서 함수를 선언하고 위에서 사용을 해도 함수가 작동하는것.

​	var에서 이런 현상이 나타나는데, 아래에서 변수를 선언한것을 먼저 프로그램 작동전 스캔을 하면서 var 변수이름;을  해당 변수이름을 사용하는 문장위에서 우선 선언해버리기때문에 사용이 가능해짐

```js
function hello1() {
	console.log("hello1");
}
hello1();	//작동

hello2();	//작동
function hello2() {
	console.log("hello2");
}

(var name; 먼저 선언해버림)

console.log(name);	//원래는 없는 변수값을 출력하게하는것이기에 에러가 떠야하는데, undefined가 출력된다. 변수자체는 위에서 선언하기때문

var name = "john";


```

<hr>

+ new 생성자 함수와 프로토타입 체이닝

js는 모든함수가 객체임.

```js
function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
let user = new User("Jack"); // User {name: 'Jack', isAdmin: false} 출력
```

그렇기에 함수이자 객체인 User를 기준으로 user를 만들었다고 봐야함.



이는 프로토타입 체이닝을 통해서 함수 User와 user가 연결되어있음. (밑은 다른예시)

![스크린샷 2021-06-02 오전 11.36.59](/Users/jeong-gyeonghun/Desktop/Coding/Fastcampus/Part25/스크린샷 2021-06-02 오전 11.36.59.png)

(https://velog.io/@sik2/JS-CoreJavaScript-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-%EC%B2%B4%EC%9D%B4%EB%8B%9DPrototype-Link-Prototype-Object)

이렇게 생성된 new 생성자함수는 재사용 목적이 없는 단호출용 객체 생성에 효율적임 (사용후, 해당 객체는 프로토타입 체이닝으로 가비지컬렉션에 의한 소가가 되지 않는다 생각할 수도 있지만, 스코프 범위를 벗어나면 사라지게 되어있음. 물론 스코프가 전역이라면 사라지지않겠지)

-> 서로 연관되어있는 체이닝관계가 불편해서 ES6에서 constructor() {}라는 생성자 함수가 추가되었다

<hr>

