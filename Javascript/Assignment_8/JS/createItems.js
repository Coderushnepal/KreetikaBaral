var title = document.createElement('div');
var heading = document.createElement('h2');
var lineText = document.createElement('p');

title.id = 'title';
// title.style.backgroundColor = 'red';

heading.style.color = 'white';
heading.style.textAlign = 'center';
heading.innerHTML = 'Hangman';

lineText.style.color = 'white';
lineText.style.textAlign = 'center';
lineText.innerHTML = 'Enter a letter in the blanks';

document.body.appendChild(title);
title.appendChild(heading);
title.appendChild(lineText);

//-------Creating blanks to enter letters
function countLetter() {
    for (var i=0; i<wordLetters.length; i++) {
        
    }
}











