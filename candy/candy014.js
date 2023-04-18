// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

function uniqueOrder(sequence) {
  // 實作寫在這裡
  // no need to convert string to array if it's not already, since for...of can be used to iterate over any iterable

  // to store the unique characters
  const result = [];
  // to store the last character that was added to the result array
  let lastChar = '';

  for (const char of sequence) {
    // check if the current character is different from the last one that was added to the result array
    if (char !== lastChar) {
      // if it is, add the current character to the result array
      result.push(char);
      // set the lastChar variable to the current character
      lastChar = char;
    }
  }

  return result;
}

console.log(uniqueOrder("AABCC")) // [ 'A', 'B', 'C']
console.log(uniqueOrder("AAABBBCCBCC")) // [ 'A', 'B', 'C', 'B', 'C']
console.log(uniqueOrder([1, 2, 1, 2, 1])) // [ 1, 2, 1, 2, 1 ]
console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])) // [1, 2, 1]