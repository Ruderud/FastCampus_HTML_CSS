//p라는 프로미스 객체가 fulfilled되는 시점에 p.then안에 설정한 callback함수 실행

const p = new Promise((resolve, reject) => {
    //팬딩
    setTimeout(()=> {
        resolve(); //fulfilled
    },1000);
}) 

p.then(() => {  //여기있는 함수는 fulfilled가 되는시점이어야하므로 1초후 시작하게된다.
    //일종의 callback을 작성하는 곳
    console.log('1000sm후에 fulfilled 된다.') //프로그램 시작 1초후 "1000sm후에 fulfilled 된다." 는 문구가 출력된다.
})