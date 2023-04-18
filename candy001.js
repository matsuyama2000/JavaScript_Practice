// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

function sumOfSmallestValues(arr) {
  // 實作程式碼寫在這裡
  // sorting the array in ascending order
  arr.sort(function (a, b) {
    return a - b; // if a is less than b, it will be moved to a lower index
  });
  const smallest = arr[0];
  const secondSmallest = arr[1];
  return smallest + secondSmallest;
}

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19