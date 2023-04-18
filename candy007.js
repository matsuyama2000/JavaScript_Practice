// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  // 實作寫在這裡
  // filter out the even numbers into a new array
  // vice versa
  const evens = numbers.filter(num => num % 2 === 0);
  const odds = numbers.filter(num => num % 2 !== 0);


  // check if there is only one even number in the array
  // vice versa
  switch(true) {
    case (evens.length === 1):
      return evens[0];
      break;
    case (odds.length === 1):
      return odds[0];
      break;
    default:
      return "The given array does not contain a unique odd or even number.";
  }
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160