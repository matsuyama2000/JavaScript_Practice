// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  // 程式碼寫在這裡

  const withoutZeros = arr.filter((i) => i !== 0); // filtering out all number 0
  const zeros = arr.filter((i) => i === 0); // containing only number 0
  const newArr = withoutZeros.concat(zeros); // withoutZeros + zeros
  return newArr;
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]