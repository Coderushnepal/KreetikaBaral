var wordsList = `Apple
Mango
Banana
Strawberry
Orange
Pear
Pineapple
Grapes
Guava
Watermelon`;

var splitList = wordsList.split('\n');
console.log(splitList);
var randomWord = splitList[Math.floor(Math.random() * splitList.length)].toLowerCase();
console.log(randomWord);
var wordLetters = randomWord.split('');
console.log(wordLetters);




