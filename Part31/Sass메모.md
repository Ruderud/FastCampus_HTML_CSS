Scss가 더 많이 사용된다 (Scss는 js처럼 세미콜론이나 쉼표같은것을 사용함. sass는 안쓴다)

```
yarn add node-sass
```

이걸로 sass를 만든다 (css->sass로 바꿔주는 모듈)



! 현재 sass 모듈 6버전은 호환성문제가있어서, dart-sass를 사용한다

```
~$ sass 'scss파일명'.scss:'css로변환할파일명'.css
```

위 명령어로 컴파일해서 css를 적용해서 사용해야한다.



```js
function printName() {
  var inner1 = () => console.log(this.name, name);
  var inner2 = function () {console.log(this.name, name)};
  function print() {
    inner1();
    inner2();
  }
  console.log(name);
  var name = 'C';
  print();
  name = 'D';
console.log(this)
  return print;
}
name = 'B';

({name: 'A',
  fnc: printName
 }).fnc()();
```

![classNames](/Users/jeong-gyeonghun/Desktop/classNames.png)

