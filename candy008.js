// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
// 英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
// 所有傳入的字都是小寫。

function highestScoreWord(input) {
  // 實作寫在這裡
  // split the input string into an array of words
	// ["lorem", "ipsum", "dolor", "sit", "amet"]
  const words = input.split(" ");
  
  // map each word to its score
  const scoresArray = words.map(word => {
    // split the current word into an array of characters
		// characters = ["l", "o", "r", "e", "m"]
    const characters = word.split("");

    // reduce the array of characters to the score for that word
    return characters.reduce((ac, currentCha) => {
      // calculate the score for the current character in the word
      return ac + (currentCha.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
    }, 0);
  })

  // find the index of the word with the maximum score
  const maxScoreIndex = scoresArray.indexOf(Math.max(...scoresArray));
  return words[maxScoreIndex];
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there