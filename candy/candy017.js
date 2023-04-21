// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

function countBits(num) {
  // 實作寫在這裡
  // the output binaryNumber is a string
  const binaryNumber = num.toString(2);
  // count the occurrences of the number 1
  return (count = Array.from(binaryNumber).reduce(
    (acc, cur) => (cur === "1" ? acc + 1 : acc),
    0
  ));
}

console.log(countBits(1234)); // 5
console.log(countBits(1450)); // 6
console.log(countBits(9527)); // 8
