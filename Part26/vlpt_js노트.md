1. 논리 연산자 적용순서는 ! > && > || 순서임

2. Switch case문에서 default는 모든 케이스가 거짓일때 수행하는 문장

3. Template literal 

```js
fuction whatYourName(name) {
	return console.log(`내이름은 ${name}입니다.`);
}
```

4. 화살표함수 () => {}의  this     !=     function의 this

   ```js
   const dog = {
     name: '멍멍이',
     sound: '멍멍!',
     say1: function say1() {
       console.log(this.sound);
     }
     say2: () => {
       console.log(this.sound);
     }
   };
   
   dog.say1(); //멍멍!
   dog.say2(); //오류발생. 화살표함수의 this는 자기가 속한 객체를 가져오지 않기때문.
   ```

   

5. 객체 비구조화 할당.

   ```js
   const ironMan = {
     name: '토니 스타크',
     actor: '로버트 다우니 주니어',
     alias: '아이언맨'
   };
   
   const captainAmerica = {
     name: '스티븐 로저스',
     actor: '크리스 에반스',
     alias: '캡틴 아메리카'
   };
   
   function print(hero) {
     const { alias, name, actor } = hero; //객체 내부의 값을 사용할때 앞에 hero. 을 쓸필요가 없어짐
     const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
     console.log(text);
   }
   
   print(ironMan);
   print(captainAmerica);
   ```

   또는 print함수를

   ```js
   function print({ alias, name, actor }) {
     const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
     console.log(text);
   }
   ```

   이렇게 써서 더 간결하게할 수도있음. (파라미터단계에서 비구조화 할당)

6. Getter, setter

   getter함수 : 특정값 조회시, 설정한 함수로 연산된 값을 반환

   ```javascript
   const numbers = {
     a: 1,
     b: 2,
     get sum() {
       console.log('sum 함수가 실행됩니다!');
       return this.a + this.b;
     }
   };
   
   console.log(numbers.sum); //3
   numbers.b = 5;
   console.log(numbers.sum); //6
   ```

   setter함수 : 아래 numbers.a = 5;와같이 값을 설정할때마다, 설정하는 값을 함수의 파라메터로 가져와서 함수(set a)를 실행함.

   ```js
   const numbers = {
     _a: 1,
     _b: 2,
     sum: 3,
     calculate() {
       console.log('calculate');
       this.sum = this._a + this._b;
     },
     get a() {
       return this._a;
     },
     get b() {
       return this._b;
     },
     set a(value) {
       console.log('a가 바뀝니다.');
       this._a = value;
       this.calculate();
     },
     set b(value) {
       console.log('b가 바뀝니다.');
       this._b = value;
       this.calculate();
     }
   };
   
   console.log(numbers.sum);
   numbers.a = 5;
   numbers.b = 7;
   numbers.a = 9;
   console.log(numbers.sum);
   console.log(numbers.sum);
   console.log(numbers.sum);
   ```

   위 함수에서 setter, getter를 쓰면 sum을 호출할때마다 계산하는것이아닌, 파라메터값을 새로 지정할때마다 합산하여 저장해놓고 저장한 값만 불러오는방식이라 이전보다 더 효율적이된다.

7. 배열

   js에서 배열은 [0,'apple',2,false]이런식으로 여러종류 변수를 섞어넣어도된다.

   배열이름.push(); 배열에 내용 추가

   배열이름.length 배열의 길이 확인

8. `Object.entries`: `[[키, 값], [키, 값]]` 형태의 배열로 변환

9. forEach내장함수 : 리스트.forEach();는 해당 리스트의 원소들을 하나씩 가져와서 ()내용에 따라 수행시키는 내장함수임

   ```js
   const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
   
   superheroes.forEach(hero => {
     console.log(hero);
   });
   
   ```

10. map함수 : 리스트.map(); 꼴로사용하며 리스트의 원소들을 ()내용에 따라 수행하여 그결과를 리스트로 묶어서 반환함.

    ```js
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    
    const squared = array.map(n => n * n);
    console.log(squared);
    ```

11. + indexOf: 리스트.indexOf();로 사용하며, ()에 들어간 값이 리스트에서 어느위치에 존재하는지 index값을 반환함 (일치하는게없다면 -1)

    + findIndex()함수는 ()내용에 해당하는 값이나 특정조건을 만족하는 위치인덱스값을 알려줌

    + Find()함수는 위에서 인덱스값을 알려준거와는 달리, 해당 조건을 만족하는 위치의 값을 반환함

    + Filter()함수는 ()내용의 조건에 해당하는 원소들을 추출해서 리스트로 반환해줌

    + Splice(a,b)함수는 배열.splice(a,b); -> 인덱스 a위치값을 포함해서 a위치부터 b개의 배열을 잘라옴

    + Slice()는 splice와는 달리 원래 배열을 '복사해서'가져옴. 그렇기에 기존의 배열을 건드리지않음.

    + Shift()는 리스트의 맨앞부터 하나씩 뺌

    + Unshift()는 리스트의 맨앞부터 ()의 값을 추가

    + Pop()은 리스트의 맨뒤부터 하나씩 뺌

    + Push()는 리스트의 맨뒤부터 ()의 값을 추가

    + Concat()은 배열1.concat(배열2)로 사용시 배열 1뒤에 배열 2원소를 이어붙인값을 새로 만들어서 반환 (배열1,2는 온전하다)

    + Join()은 해당 배열의 원소사이에 ()값을 집어넣어서 문자열로 반환

    + Reduce() (중요)

      ```js
      const numbers = [1, 2, 3, 4, 5];
      let sum = array.reduce((accumulator, current) => accumulator + current, 0);
      //accumulator는 최종반환하기위해 돌릴 계산결과값
      //current는 배열에서 하나씩 가져오는 원소값
      //0은 초기 accumulator의 값
      
      console.log(sum);
      ```

12. 프로토타입은 한 예시로써 쉽게생각하면 각 객체에 중복되는 함수(또는 값)를 매번 할당하지 않고 공통적으로 가지게끔 하기 위해서 사용하는것.

13. 클레스문법은 같은 형태를 가지는 객체들을 생성할때 편리하게 사용할 수 있음. (+ 들어가있는 함수를 상속해서 사용하기도 편함)

    