// get, set

class A {
    _name = 'no name';      //문법적 강제는 아니지만, 앞에 '_'는 내부적으로만 사용할경우에만 지정. 그외에는 public하게 사용하게됨.

    get name() {
        return this._name + '@@@';
    }

    set name(value) {
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a); //A { _name: 'no name' }

a.name = 'mark';        
console.log(a); //A { _name: 'mark!!!' }
console.log(a.name); //mark!!!@@@ -> geter의 결과. seter의 결과값을 받아서 거기에 @@@를 더해서 반환
console.log(a._name); //mark!!! -> seter만의 결과. _name을 딱 지정해서 가져온 값


//readonly

class B {
    _name = 'no name'; //이럴때는 _를 사용한 변수는 그 값이 바뀌지않을때 의미가 있음

    get name() {
        return this._name +'@@@';
    }
}

const b = new B();
console.log(b); //B { _name: 'no name' }

b.name = 'mark'; //B { _name: 'no name' } -> 문법적 에러는 없지만, seter함수가 없기때문에 마치 readonly처럼 사용된다.
console.log(b);