//promise (ES6부터)

console.log(Promise); //[Function: Promise] -> 이미 전역객체로써 존재하고있음.

/*
생성자를 통해서 프로미스 객체를 만들 수있으며, 생성자의 인자로 executor라는 함수를 이용함

executor함수는 resolve와 reject를 인자로 가짐.
    (resolve, reject) => {...}
resolve, reject는 함수임
    resolve(), reject()

new Promise( executor (resolve, reject) => {}); 꼴

*/


//생성자를 통해서 프로미스 객체를 만드는 순간 pending (대기)상태가 된다. -> new Promise((resolve, reject)=>{}); // pending

/*
pending상태 돌입후, resolve 함수를 실행하면 fulfilled(이행)상태가 된다. 
 
new Promise((resolve, reject)=>{
    비동기 상황처리
    ...
    resolve(); -> fulfilled
}); 
*/

/*
reject함수를 실행하면 rejected(거부)상태가 된다.

new Promise((resolve, reject)=>{

    reject(); -> rejected
});

비동기 상황처리를 하는동안에는 펜딩상태, 상황처리가 잘되면 fulfilled / 문제가 생기면 rejected

*/

//p라는 프로미스 객체는 1000ms후에 fulfilled 된다.
new Promise((resolve, reject) => {
    //팬딩
    setTimeout(()=> {
        resolve(); //fulfilled
    },1000);
})