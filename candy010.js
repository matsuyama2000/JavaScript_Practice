// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  // 實作寫在這裡
  const digitsArray = num.toString().split('').map(num => parseInt(num)); // 25 => ['2', '5'] => [2, 5]
  const length = digitsArray.length; 2
  // hold the expanded form of the input num
  let result = []; 
  
  // loop over each digit in the digits array
  digitsArray.forEach((digit, index) => {

    // check if the current digit is larger than 0
    if (digit > 0) {
      
      // calculate the power of ten based on the current index
      // e.g 1000 has 3 zeros (4 - 0 - 1)
      const powerOfTen = length - index - 1;

      // calculate the term in the expanded form of the number
      // Math.pow(base, exponent)
      let term = `${Math.pow(10, powerOfTen)} x ${digit}`;

      if (powerOfTen === 0) {
        term = `${digit}`
      }
      
      // add the term to the result array
      result.push(term);
    }
  })
  
  return result.join(' + ');
}

console.log(expandedForm(8)) // 印出 8
console.log(expandedForm(25)) // 印出 10 x 2 + 5
console.log(expandedForm(148)) // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)) // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)) // 印出 10000 x 6 + 100 x 3 + 8