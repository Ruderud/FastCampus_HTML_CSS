

const a = new Boolean(false);

console.log(a,'는', typeof a);      // a는 boolean(false)라는 오브젝트값이 되었다. (boolean()함수에 false가 들어간 상태의 오브젝트)

const b = Boolean(false);

console.log(b,'는', typeof b)       // 'falses 는 boolean' 이라는 primitive value(원시값)이 출력된다.


let a1 = null;

let b1 = undefined;

console.log(a1==b1);    // ==비교시에는 null과 undefined가 같게 취급되지만, ===으로 비교시에는 false가 된다.

let c = NaN

console.log(c, typeof c); //NaN을 숫자형으로 인식

let d = Number("mark");

console.log(d, typeof d); //mark를 숫자형으로 바꾸려했으나, 해당하는 숫자가 없으므로 NaN이 출력되고 이는 숫자형이다.

let e = "MuYa";

let f = `${e}ho`;

console.log(f);