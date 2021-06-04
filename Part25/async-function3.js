function pp(ms) {
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            //resolve(ms);
            reject(new Error('reason'))
        }, ms);
    });
}

async function asyncPP() {
    const ms = await pp(1000); 
    return 'mark:' + ms;
}

(async function main() {
    try {
        const name = await asyncPP();
        console.log(name);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('end')  //문제가 생기면 catch -> finally, 문제가 생기지 않으면 try -> finally로 함수가 작동하게된다.
    }
})();