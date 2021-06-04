//보통 비동기작업시, callback함수를 인자로 넣어, 로직이 끝나면 callback함수를 호출함.
//이경우에는 함수가 아래로 진행되지 않고, callback함수 안으로 진행

/*
function c(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

c(() => {
    console.log('1000ms후 CB함수 실행')
});

c(() => {
    c(() => {
        c(() => {
            console.log('3000ms후 CB함수 실행') //callback함수 내부로 계속 들어가는형태
        })
    })
})
*/


// then함수에서 다시 프로미스 객체를 리턴하는 방법을 이용해서 체이닝시, 비동기작업을 순차적으로 아애로 표현가능.

function p() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },1000);
    });
}

p() //0초 시작
    .then(() => {   //1초
    return p();     //1초에서 p다시 실행
})
.then(() => p())    //2초에서 p다시 실행
.then(p)            //3초에서 p다시 실행
.then(() => {       //4초에서 실행
    console.log('4000ms번쨰에서 출력'); //4초에서 출력
})
