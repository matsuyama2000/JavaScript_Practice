// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  // 實作寫在這裡

  // convert num to a string, then split the string into an array of single-digit strings
  const numArray = num.toString().split("");

  // convert e to a number, square it, and convert the squared e back to a string
  const squaredArray = numArray.map((e) => (Number(e) ** 2).toString());

  // concat all the elements into a single string
  return squaredArray.join("");
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449