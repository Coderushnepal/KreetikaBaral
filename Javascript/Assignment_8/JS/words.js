var wordsList = `Apple
Mango
Banana
Orange
Pear
strawberry
Pineapple
Grapes
Guava
Jackfruit
Kiwi
Avacado
Watermelon`;

var splitList = wordsList.split('\n');
console.log(splitList);
var randomWord = splitList[Math.floor(Math.random() * splitList.length)].toLowerCase();
console.log(randomWord);
var wordLetters = randomWord.split('');
console.log(wordLetters);




