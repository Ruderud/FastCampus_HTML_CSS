//이거도 비동기함수처리방법
// const 함수이름 = async() => {} 꼴로 사용


//promise 객체를 리턴하는 함수

function p(ms) {
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve(ms);
        }, ms);
    });
}



//promise 객체를 이용해서 비동기 로직을 수행할 때

p(1000).then(ms => {
    console.log(`${ms} ms 후에 실행`);
});



//promise 객체를 리턴하는 함수를 await로 호출하는 방법
//이러한 방법의 장점은 로직코드를 밑으로 흘러가게 할 수 있다는장점이있음

/*
const ms = await p(1000); //SyntaxError: await is only valid in async function에러가 뜸 
                          //-> await을 사용하는 경우에는 항상 async 함수 안에서 사용해야함
console.log(`${ms} ms 후에 실행`)
*/

(async function main() {
    const ms = await p(1000); // 비동기처리가 끝나기전까지 기다리다가, 정상적으로 끝나서 resolve되면 그인자를 가져와서 수행한다.
    console.log(`${ms} ms 후에 실행된다.`);
})();


//promise 객체가 rejected 된 경우의 처리를 위해서는 try catch를 이용.

function pp(ms) {
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve(ms); //B-2
            //reject(new Error('reason')); B-2
        }, ms);
    });
}

//(A)
async function asyncPP() {
    const ms = await pp(1000); //B-1
    return 'mark:' + ms;
}

(async function main() {
    try {
        const name = await asyncPP();
        console.log(name);  //(A)부분을 추가시, mark를 출력하고, 정상작동했기때문에 catch단에 가지않고 끝난다 // B파트 시행시 mark:1000가 시행된다.
    } catch (error) {
        console.log(error);
        //Error: reason  at~~ 의 오류가 발생하는 이유로그를 출력함. (pp함수에서 resolve함수를 비활성화했기때문)
    }
})();