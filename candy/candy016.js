// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  // 實作寫在這裡
  // split the string into an array of substrings
  const parts = str.split("_");
  // creates a new array with the 1st part of the string as the first element
  const result = [parts[0]];

  for (let i = 1; i < parts.length; i++) {
    // capitalize the 1st character
    // concat the capitalized 1st character with the rest of the substring starting from the 2nd character
    const capitalized = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
    result.push(capitalized);
  }

  return result.join("");
}

console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore
