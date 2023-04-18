// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

function findOddElm(numbers) {
  // 實作寫在這裡
  // filter out the elements that appear an odd number of times
  const filteredNums = numbers.filter((item) => {
    // determine the number of occurrences of the current item in the array
    const numOccurrences = numbers.reduce((acc, currentEle) => {
      // if the current element === the item being counted, increment the count
      if (currentEle === item) {
        acc += 1;
      };

      return acc;
    }, 0);

    // check if the number of occurrences is odd
    return numOccurrences % 2 !== 0;
  });

  
  return filteredNums[0];
}

console.log(findOddElm([1, 1, 2])) // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])) // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])) // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])) // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])) // 印出 5