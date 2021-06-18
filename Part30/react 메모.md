DOM : 각 html엘리먼트를 가지고있는 js엘리먼트

Virtual DOM : 리액트에서 가상의 메모리에 렌더링하기 위해 만든 엘리먼트

​	진짜DOM하고 가상DOM을 비교하면서 진짜 바뀌게되는 부분을 체크해서 패치함





Jsx : 리액트 컴포넌트를 만들때 정의하는 문법. html형태가 js처럼 변환되는것.

 1. 테그는 꼭 닫아줘야함 (br같은 닫는 테그가 없는것도 작성을 해줘야함. ). 아니면 selfclosing 해줘야함 <input /> 이런식으로 사용해줘야함

 2. 두개이상의 테그는 꼭 하나의 테그로 감싸져야함. 

    ```jsx
    <div>
    	<div></div> <div></div> <div></div>
    </div>
    
    <>	//프레그먼트 사용
    	<div></div> <div></div> <div></div>
    </>
    ```

3. js값을 보여줄때는 {값이름}으로 감싸서 사용

4. 스타일은 객체형태로 넣어주어야 작동함. 클레스는 className을 이용

5. 주석은 이런식으로

   ```jsx
   {/*주석*/}
   
   <input 
   //주석
   />
   ```

   

Props : 프로퍼티들을 의미

조건부렌더링 : 사망연산자(값이 변할때유리), &&연산자(단순히 보여주는용도) 2가지가있음

```jsx
import React from 'react';
import Hello from './hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial = {true}/> {/* isSpecial만 놔두게 되는경우에는 불린값이 true로 지정한것과 같은 결과를 가져옴 */}
      <Hello color="pink"/>
    </Wrapper>
  )
}

export default App;
```

<hr>

useState로 컴포넌트에서 바뀌는 값 관리

```jsx
import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0); {/*배열 비구조할당을 통해서 이런형태로 만든것 
                                        setNumber이라는 함수는 상태를 바꾸는 함수의 역할, number는 그 변한값을 저장하는 역할*/}

    const onIncrease = () => {
        setNumber(preNumber => preNumber +1);
        {/* setNumber(number+1);와 동일한 효과를 가지는 함수형 컴포넌트이다. 최적화할때 좋음 */}
    }
    const onDecrease = () => {
        setNumber(number-1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>    {/* 여기서 함수를 호출해넣으면 안된다! 클릭할때 이함수를 호출하고싶은거지, 처음 랜더링할때호출하는 목적이 아니기 때문 */}
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;
---------------
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <Counter />
  )
}

export default App;

```

<hr>

input상태 관리

```jsx
import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);       {/* 이벤트가 일어났을때, 이벤트안에있는 e.target은 돔에대한 정보를 가지고있음. 따라서 console.log(e.target.value);는 인풋창에 입력한 정보를 가지게되고 이를 콘솔에 출력하게됨*/}
    }
    
    const onReset = () => {
        setText('');
    }
    return (
        <div>
            <input onChange={onChange} value={text} />   
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;
```

<hr>

여러개의 input 상태관리: 이름/닉네임을 인풋값으로 받게되는데, 이를 위에서처럼 각각의 함수를 만들어서 지정할 수도 있지만, 좋은방법이 아님

​	-> 객체로써 다중 인풋값을 관리하는 방법을 사용

<hr>

useRef로 특정 DOM선택하기

​	특정 DOM(dom select함수)을 선택해야하는 경우가있음. 

​		ex)특정스크롤에서 데이터를 가져와야할때

​	이때 리엑트에서는 ref(useRef)를 이용함.

<hr>

배열랜더링하기

```jsx
return(
        <div>
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> 
            {/* 지금은 이렇게 그냥 보여줄수도있지만, 유저를 지워야하거나 새로 늘려야할때는 귀찮아지므로 이때 map이라는 함수를 사용함 */}
        </div>
    )
```

```jsx
return(
        <div>
        {
            users.map(
                user => (<User user={user} key={user.id} />)
            ) 
        }       
    {/* 각 객체의 키값을 특정할수있는 key(여기서는 id)가 따로 정해져있지 않다면, index값을 가져와서 사용한다. 
    -> 다만 효율적인 상승은 기대할 수 없음
      (user, index) => (<User user={user} key={index}/>) */}
        </div>
    );
```

여기서 키를 꼭 할당해줘야하는 이유가 생김. 

key를 할당하지않으면, 각 객체가 뭘할당해야할지 모르기때문에 리스트가 밀리거나 제거될때 전체를 손대는 비효율적은 상황이 발생함. 

특히 배열의 값이 자주업데이트된다면 꼭 지정해주는것이 좋음

<hr>

useRef로 컴포넌트 안의 변수 만들기

​	컴포넌트내부에서 let을 선언해서 사용할때, useState를 이용해서 사용해서 구현하면 값이 바뀔때마다 새로 컴포넌트를 리랜더링하기때문에 비효율적임

​	전체를 리랜더링할필요가없을때는 useRef를 사용하면 좀더 효율적임 (리랜더링되지않음!)

​		ex) setTimeout, setInterval의 id를 가져올때, 외부라이브러리를 사용해서 생성된 인스턴스를 가져올때, 스크롤 위치저장 등등



<hr>

useEffect Hook

리엑트에서 특정컴포넌트가 처음 나타나거나 사라질때 특정작업을 할 수 있음.

+프롭스의 상태가 바뀔때도 특정작업 수행가능(랜더링)

이러한것의 예시는 사이트에 대해 처음 랜더링해서 가져올때, url의 메이페이지/요소명의 구조에서 요소명의 구조값을 가져와서, 요소명에 해당하는 글이나 내용을 가져오는 작업에 쓸 수 있음.

<hr>

useMemo Hook을 사용해서 연산한값을 재사용하기

최적화시 사용함.

<hr>

useCallback hook 함수를이용하여 함수를 재사용하기

```
const "함숙값" = useCallback( () ={
	//수행내용
}, [depths]); //수행내용에 사용한 변수값들을 depths에 [a, b, c...]꼴로 집어넣어주지않으면 
						  //최신의 값을 가져오지못하고, 최초랜더링시 가져온값을 반영하기때문에 문제가 생긴다
```

​	+컴포넌트 리랜더링 최적화 작업을해야 그 효과가 가시적으로 나타나게된다.



(이때 여기서 (크롬기준)개발자도구 -> components-> highlight update when component render를 사용하면 랜더링될때마다 화면에서 어떤 요소가 랜더링 된다고 초록색으로 표시할수있다)

 아직까지는 현재 만들어놓은 화면에서 input창에 값을 타이핑할때마다 랜더링 되는것을 확인할 수 있다.

![image-20210606191602796](/Users/jeong-gyeonghun/Library/Application Support/typora-user-images/image-20210606191602796.png)

<hr>

React.memo함수 사용해서 컴포넌트 리랜더링 방지하기

	1. export할때 컴포넌트를 react.memo 처리하기
	2. 값을 가져오는 함수또한  react.memo를 이용하여 함수 표현식(const "이름" ~)형태로작성
	3. 각 값을 가져오는 callback함수의 뎁스를 없애고, 해당 함수를 () => {} 꼴로 최신값을 직접 참고해서 가져오게하면 depth에 적용된 [사용하는 변수들]을 확인하면서 발생하는 랜더링을 줄일수있음

성능최적화는 더이상 바뀌지않고, 최적화가 필요할때 시도해야함.

<hr>

useState대신 useReducer를 사용해서 새로운 상태를 정의 (reducer는 상태를 정의하는 함수를 의미. Action, type값을 가져와서 반환한다.)

​	useState는 직접지정해주는방법이용

​	useReducer는 액션이라는 객체를 이용. 업데이트할 내용을 참조하여 객체에 추가하는 방식.

```jsx
funcrion reducer(state, action) {
  switch (action, type) {
    case 'Increase':
      return state+1;
    case 'decrease':
      return state-1;
    default:
      return state;
  }
}//이러한 형태로 상태를 정의해서 그 결과값을 반환
```

```jsx
//useReducer의 구조
const [number, dispatch] = useReducer(reducer, 0);
//reducer는 위의 모습의 리듀스 함수를, 0은 초기값을 의미(객체, 리스트 모든게가능)
//number는 현재 상태, dispatch는 액션을 발생시키는함수
		dispatch({ type: 'Increase'}) //이런꼴

```

<hr>

Usestate와 useReduce의 사용용도차이 -> 상황에따라!!

​	컴포넌트에서 관리하는값이 하나고 단순하다면 -> usestate가 편함

​	컴포넌트에서 관리하는 값이 여러개고 복잡하다면 -> useReducer가 편함

<hr>

custom hook을 만들어서 컴포넌트의 반복적인 작업을 자동화하는 훅을 사용해서 원하는 기능을 구현, 값을 반환 시키게할 수 있음.



<hr>

Context API이용해서 전역값 관리

​	이걸 사용하는 이유는 컴포넌트A -> 컴포넌트B -> 컴포넌트C 이런식으로 프롭스를 전달하던것을, 중간단계인 B컴포넌트없이 바로 A에서 C로 쏴주는 기능을 만들어서, 더 효율적으로 웹을 만들기 위함임.

![KakaoTalk_Photo_2021-06-09-11-03-08](/Users/jeong-gyeonghun/Downloads/KakaoTalk_Photo_2021-06-09-11-03-08.gif)

돌아가는 것은 이런방식으로 돌아감

<hr>

Immer을 이용한 더 쉬운 불변성 확보

​	

```js
const Obj {
  a: 1,
  b: 2
};

Obj.b = 3 //이런식은 불변성을 해침

const newObj {
  ...Obj,	//이런식으로 스프레드 연산자를 이용하여 새로운 객체를 만들어서 기존객체에 뒤집어씌우는방식이 불변성이 유지된다.
    b: 3
};
```

immer는 기본적으로 native reducer보다는 느리지만, 데이터5만중 5천개 업데이트 기준 6ms->31ms 정도이므로 필요할때(기존 reducer코드가 복잡해져서 불변성 유지가 힘들어질때)는 사용해도 된다. 

+ immer는 js에서 proxy라는 기능을 사용한다. 구형브라우저나 ES5이하에서는 급격히 속도가 느려짐

<hr>

클레스형 컴포넌트 (요즘에 잘쓰지는 않음)

​	예전방법이므로, 실사용에서는

```jsx
function 함수명 = () => {
	//수행내용
}
```

​	이러한 방법을 사용하는것이 좋음

​	이전의 함수형 컴포넌트 선언은 state등을 관리할 수 없었지만, hook이 생기면서 이제 사용할 수 있게되어 사장되었다.

 + state와 setState의 차이

   ```jsx
   
       handleIncrease = () => {
           this.setState(state => ({
               counter: state.counter +1
           }));
           this.setState(state => ({
               counter: state.counter +1
           }));
           this.setState(state => ({
               counter: state.counter +1
           }));
           this.setState(state => ({
               counter: state.counter +1
           }));                                    //여기서는 4씩 증가 (함수형업데이트)
       }
       handleDecrease = () => {
           this.setState({
               counter: this.state.counter - 1
           });
           this.setState({
               counter: this.state.counter - 1
           });
           this.setState({
               counter: this.state.counter - 1
           });
           this.setState({
               counter: this.state.counter - 1
           });                                     //여기서는 -1씩 감소 
   ```

   위식에서 handleIncrease 함수는 수행시마다 counter를 4씩 증가시키지만, handleDecrease함수는 1씩 감소시킨다.

   이는 setState를 쓴다고해서 바로 바뀌는것이 아니기때문!(리액트는 바로적용하지않고, 비동기적으로 작업을 수행한다.)



<hr>

LifeCycle메서드 

​	클레스가 컴포넌트가 브라우져상에 나타나고 사라질때 호출되는 메서드임. (useEffect와 유사한 느낌)

```
https://codesandbox.io/s/currying-bash-mrkjb?fontsize=14
```

![Lifecycle method](/Users/jeong-gyeonghun/Desktop/Lifecycle method.png) 

shouldComponentUpdate는 최적화시 사용되는데, false반환시 랜더단계로 넘어가지않고, true반환시 랜더단계로 넘어가게 되어있음.

componentWillUnmount는 사라지기직전에 수행함.

getSnapshotBeforeUpdate는 클레스 컴포넌트에서만 사용할 수 있음.

<hr>

componentDidCatch -> 이또한 클레스 컴포넌트에서만 사용할 수 있음.

​	발생한 오류와 해당정보를 가져올수있고 이를 콘솔창등에 출력가능

<hr>

Sentry 연동

​	Sentry는 error관리 툴로써 다음과 같이 설치함

```terminal
~ yarn add @sentry/browser
```

​	위모듈을 설치한후,

​	

```jsx
import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";

Sentry.init({
  dsn: "https://ed866d1a3f854eb0b3bfc552fb5f5340@o823983.ingest.sentry.io/5810583",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));

// Can also use with React Concurrent Mode
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

위와같이 index.js에 코드를 추가하면 사용가능하다. 



그러면 아래와같이 sentry에서 오류를 확인가능하다.

![image-20210611002418882](/Users/jeong-gyeonghun/Library/Application Support/typora-user-images/image-20210611002418882.png)

그리고 

```
~ yarn build
```

를 통해서 새로운 빌드파일을 생성할 수 있는데, 여기서 build/static/js의 map파일이 있고, 이 파일을 통해서 오류가 발생한것에 대한 접근이 가능하다 (로컬서버에서는 centry가 접근하지 못하기에 비정상 작동 -> 이는 필요시 https://react.vlpt.us/basic/26-componentDidCatch-and-sentry.html 참조)

<hr>

prettier

​	코드작성시 더 편하게!

​	(vs코드에서 확장파일깔아서 쓰는거.)

<hr>

EsLint

​	js 문법오류등을 찾아줌

<hr>

snippet

​	자주쓰는 코드조각들을 빠르게 불러오는방법

​	

```jsx
import React from 'react';

function ${1:${TM_FILENAME_BASE}}() {
  return (
    <div>
      ${2:myComponent}
    </div>
  );
}

export default ${1:${TM_FILENAME_BASE}};
```

​	위의 방법으로 작성해서 

```
https://snippet-generator.app/
```

에 이동하여 vs코드용으로 변환한것을 

Vscode->code->기본설정->사용자 코드조각 

```json
{
	// Place your snippets for javascriptreact here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"create fuctional React component": {
		"prefix": "fc",
		"body": [
		  "import React from 'react';",
		  "",
		  "function ${1:${TM_FILENAME_BASE}}() {",
		  "  return (",
		  "    <div>",
		  "      ${2: MyComponent}",
		  "    </div>",
		  "  );",
		  "}",
		  "",
		  "export default ${1:${TM_FILENAME_BASE}};"
		],
		"description": "create fuctional React component"
	  }
}
```

이런식으로 추가해서 사용하면 된다. (fc로 위의 기본작성내용을 불러오고, 1,2...순서에따라 입력할 내용을 순차적으로 선택한다(tab)으로 이동)