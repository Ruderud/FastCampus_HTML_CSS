//Q1 3보다 큰 수를 리스트로 반환
function biggerThanThree(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length ; i++) {
      if (numbers[i] > 3) {
        result.push(numbers[i])
      }
    }
    return result;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
  
  export default biggerThanThree;
  

//Q2 10보다 큰수들의 갯수 구하기
function countBiggerThanTen(numbers) {
    let result = numbers.reduce((acc,cur) => {
      if (cur>10) {
        acc+=1;
      } 
      return acc;
    } ,0)
    return result;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;
  