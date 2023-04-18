// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  // 實作寫在這裡
  const missingChars = [];

  for (i = 0; i < chars.length - 1; i++) {
    // checking for gap between two consecutive characters elements
    let currentCharCode = chars[i].charCodeAt(0);
    let nextCharCode = chars[i + 1].charCodeAt(0);
    if (nextCharCode - currentCharCode > 1) {
      for (j = currentCharCode + 1; j <= nextCharCode - 1; j++) {
        // finding the missing characters
        missingChars.push(String.fromCharCode(j)); // turning a charCode into a string & adding it into the missingChars array
      }
    }
  }

  if (missingChars.length === 0) {
    // checking whether there are any missing characters
    return "you're set. no missing characters found";
  } else {
    return missingChars;
  }
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...