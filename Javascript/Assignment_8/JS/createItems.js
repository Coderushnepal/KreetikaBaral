// var title = document.createElement('div');
// var heading = document.createElement('h2');
// var lineText = document.createElement('p');

// heading.style.color = 'white';
// heading.style.textAlign = 'center';
// heading.innerHTML = 'Hangman';

// lineText.style.color = 'white';
// lineText.style.textAlign = 'center';
// lineText.innerHTML = 'Enter letter in the blanks';

// document.body.appendChild(title);
// title.appendChild(heading);
// title.appendChild(lineText);


//--------------------------Creating blanks to enter letters----------------------------------------
//----creating main div for dashlines
var letterDiv = document.createElement('div')               

letterDiv.id = 'letterDiv';
letterDiv.class = 'letterDiv';
letterDiv.style.color = 'white'
letterDiv.style.marginLeft = '350px'
document.body.appendChild(letterDiv);

//--------creating div for alreadyguessed letters
var alreadyGuessed = document.createElement('div')

alreadyGuessed.id = 'alreadyGuessed';
alreadyGuessed.class = 'alreadyGuessed';
document.body.appendChild(alreadyGuessed);

var wrongLetterContainer = document.createElement('div')

wrongLetterContainer.id = 'wrongLetterContainer';
wrongLetterContainer.class = 'wrongLetterContainer';
document.body.appendChild(wrongLetterContainer);

//----creating dashlines in main div
function countLetter() {
    for( var i=0; i < wordLetters.length; i++ ) {
        var dashline = document.createElement('div');
        dashline.classList.add('dash');
        var newDiv = document.getElementById('letterDiv');
        newDiv.appendChild(dashline);
    }
}
countLetter();













