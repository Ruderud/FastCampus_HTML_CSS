/* value가 프로미스 객체인지 알수 없을때 사용시 -> 연결된 then 메서드 사용
    1. value가 프로미스객체일때 : resolve된 then메서드 실행
    2. value가 프로미스객체가 아닐떄 : value를 인자로 보내면서 then메서드 실행
*/

Promise.resolve(/*value*/); //value에 프로미스객체를 바로 넣을수도있고, 일반값을 인자로 넣어서 보낼수도있음

Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('poo');
    }, 1000);
})).then((data) => {
    console.log('프로미스객체인경우-> resolve된 결과를 받아서 then을 실행', //다음으로 여기값이 출력된다.
    data,
    );
});

Promise.resolve('bar').then(data => {
    console.log('then메서드가 없는경우 fullfilled된다', data)  //이 결과가 먼저 출력된다. 시간이 지정되어있지 않음
})


//resolve처럼 reject도 Promise.reject로 사용하면, catch로 연결된 rejected 상태로 변경.

/*
Promise.reject(value);

Promise.reject(new Error('reason'))
    .then(error => {})
    .catch(error => {
        console.log(error);
    });
*/

// Promise.all을 이용하면 여러개의 프로미스객체가 각각이 모두 fulfilled되었을때, then함수가 실행할 수 있게끔 할 수 있음.
//이때 then 함수의 인자는 프로미스 객체들의 인자값을 '배열'로써 돌려줌

function p(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

Promise.all([p(1000), p(2000), p(3000)]).then(messages => {
    console.log('1초 2초 3초 각각의 Promise들이 모두 fulfill되면 실행된다.', messages);
}); //1초 2초 3초 각각의 Promise들이 모두 fulfill되면 실행된다. [ 1000, 2000, 3000 ]


// Promise.race는 여러개의 프로미스객체중 가장 먼저 fulfilled되면 바로 then을 실행함


Promise.race([p(1000), p(2000), p(3000)]).then(message => {
    console.log('1초 2초 3초 Promise중 가장빠른 1초짜리 프로미스가 fulfill되면 실행된다.', message);
}); //1초 2초 3초 Promise중 가장빠른 1초짜리 프로미스가 fulfill되면 실행된다. 1000