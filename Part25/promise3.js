// then을 설정하는 시점을 정확히함. 그리고 함수의 실행과 동시에 프로미스 객체 생성 + 팬딩되도록하기 위해, 프로미스 객체를 생성하면서 리턴하는 함수 p를 만들어 
//함수 p실행과 동시에 then을 설정

/*
function p() {
    return new Promise((resolve, reject) => {
        //팬딩
        setTimeout(()=> {
            resolve(); //fulfilled
        },1000);
    }) 
}

p().then(() => {
    console.log('1000ms후에는 fulfilled된다.')
})
*/


/*
//위와 같은 구성인데 이번에는 1초후에 resolve가 아닌 rejected되게끔해서 callback함수 실행
function p() {
    return new Promise((resolve, reject) => {
        //팬딩
        setTimeout(()=> {
            reject(); //rejected
        },1000);
    }) 
}

p().then(() => {
    console.log('1000ms후에는 fulfilled된다.')
}).catch(() => {
    console.log('1000ms후에는 fulfilled된다.(rejected)')
})                                                      //1초후 '1000ms후에는 fulfilled된다.(rejected)'가 출력된다.
//이런방식을 이용해서 정상구동하지 않았을떄의 상황을 반환하는구조 설계
*/



// executor의 resolve함수를 실행할때 인자를 넣으면, then의 콜백함수의 인자로 그것을 받아올 수 있음
// reject도 가능!

/*
function p() {
    return new Promise((resolve, reject) => {
        //팬딩
        setTimeout(()=> {
            //resolve('hello resolve?'); //fulfilled
            reject('404 not found?'); //rejected
        },1000);
    }) 
}

p().then((message) => {
    console.log('1000ms후에는 fulfilled된다.', message); //1000ms후에는 fulfilled된다. hello resolve?
}).catch((error) => {
    console.log('1000ms후에는 fulfilled된다.(rejected)', error); //1000ms후에는 fulfilled된다.(rejected) 404 not found?
})
*/


//finally -> fulfilled or rejected된 후에 최종적으로 실행해야할 것이 있을때 .finally()로 설정해서 실행가능
/*
function p() {
    return new Promise((resolve, reject) => {
        //팬딩
        setTimeout(()=> {
            //resolve('hello resolve?'); //fulfilled
            reject('404 not found?'); //rejected
        },1000);
    }) 
}

p()
    .then((message) => {
        console.log('1000ms후에는 fulfilled된다.', message); //1000ms후에는 fulfilled된다. hello resolve?
    })
    .catch((error) => {
        console.log('1000ms후에는 fulfilled된다.(rejected)', error); //1000ms후에는 fulfilled된다.(rejected) 404 not found?
    })
    .finally(() => {
        console.log("end");    //1000ms후에는 fulfilled된다.(rejected) 404 not found? \n end로 출력
    })
*/


