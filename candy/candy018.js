// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數
function randomNumber(min = 0, max){
  // when only one argument is passed, min is assigned the value of the single argument, while max remains undefined
  if (max === undefined) {
    max = min;
    min = 0;
  }
  // Math.random() => generate a random number between 0 and 1 (exclusive)
  // (max - min) => calculate the range of values to generate a random number from
  // the random number generated * the range calculated
  // Math.floor() => round the random number to the nearest integer
  // + min => shift the range of numbers generated to start from the minimum value
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomNumber(50)) // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)) // 隨機印出 5 ~ 29 之間的任何一個數字