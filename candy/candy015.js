// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  // 實作寫在這裡
  const result = [];

  // loop through the given string, starting from the first character
  for (let i = 0; i < str.length; i += 2) {
    // get the two characters at the current position and the next position
    // if there is no i+1, then '_' is used instead
    const pair = str[i] + (str[i + 1] || "_");

    result.push(pair);
  }

  return result;
}

console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(splitString("")); // []
