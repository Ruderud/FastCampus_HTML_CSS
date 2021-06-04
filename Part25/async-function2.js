function pp(ms) {
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            //resolve(ms);
            reject(new Error('reason'))
        }, ms);
    });
}

async function asyncPP() {
    const ms = await pp(1000); //try-catch를 사용하지 않아도 여기서 throw가 발생하기때문에 asyncPP에서 throw가 발생하는것처럼 되어서 catch로 넘어가 콘솔이 찍히게된다
    return 'mark:' + ms;
}

(async function main() {
    try {
        const name = await asyncPP();
        console.log(name);
    } catch (error) {
        console.log(error);
    }
})();