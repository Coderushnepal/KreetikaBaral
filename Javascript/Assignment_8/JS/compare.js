var figureParts = document.getElementsByClassName('figure-part');
console.log(figureParts);

var guessedWords = new Set();
var wrongWords = new Set();
var rightWords = [];

function compareLetters() {
    document.addEventListener('keypress' , function(event) {
    var alreadyGuessed = document.getElementById('alreadyGuessed');
    if( Array.from(guessedWords).includes(event.key)) {
        // console.log(alreadyGuessed);
        alreadyGuessed.style.display = 'inline-block';
        alreadyGuessed.style.marginTop = '20px';
        alreadyGuessed.style.backgroundColor = 'navy';
        alreadyGuessed.style.padding = '15px';
        alreadyGuessed.innerHTML = event.key +" has already been guessed";
        } else {
            alreadyGuessed.style.display = 'none';
            guessedWords.add(event.key);
            // console.log(guessedWords);
            if (wordLetters.includes(event.key)) {
                    for (var j=0; j < wordLetters.length; j++) {
                        if (event.key == wordLetters[j]) {
                            displayRightGuess(event.key , j);          //yo talako function mathi call garya ho
                            // console.log(displayRightGuess);
                        }
                    } 
            } else {
                wrongWords.add(event.key);
                displayWrongGuess(wrongWords);                       //yo talako function mathi call garya ho
            } 
    
        }
    
    });
}
compareLetters();

// Displayes the matched letters received from compareLetter()
function displayRightGuess(value, index) {
    rightWords.push(value);
    const letterContainer = document.getElementById('letterDiv').children[index];
    letterContainer.innerHTML = value;
    // gameWon(rightWords);
}

window.onload = function() {
   Array.from(figureParts).forEach(function(value) {
        value.style.visibility = 'hidden';
   });
};

function displayWrongGuess(wrongWords) {
    var wrongLetterContainerr = document.getElementById('wrongLetterContainer');
    wrongLetterContainerr.style.marginTop = '15px'
    wrongLetterContainerr.innerHTML = "Wrong Guess" +' : '+ Array.from(wrongWords).join(', ');
    document.body.appendChild(wrongLetterContainerr);
    displayFigureParts();                                 //tala bata ek ek wata part add gardai janchha
    // gameover();
}

// To display the figure parts
// figurepart is an array
var k = 0;
function displayFigureParts() {
    figureParts[k].style.visibility = 'visible';
    k++;
}
