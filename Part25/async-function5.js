function p(ms) {
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve(ms);

        }, ms);
    });
}


//promise all
(async function main() {
    const result = await Promise.all([p(1000), p(2000), p(3000)]);
    console.log(result);    //[ 1000, 2000, 3000 ] 배열로 모두 출력
})();


//promise.race
(async function main() {
    const result = await Promise.race([p(1000), p(2000), p(3000)]);
    console.log(result);    // 1000출력
})();