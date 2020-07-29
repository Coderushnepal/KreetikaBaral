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

//--------------------------Creating blanks to enter letters----------------------------------------
//creating main div for dashlines
var letterDiv = document.createElement('div')               

letterDiv.id = 'letterDiv';
letterDiv.class = 'letterDiv';
letterDiv.style.color = 'white'
letterDiv.style.marginTop = '300px'
letterDiv.style.marginLeft = '500px'
document.body.appendChild(letterDiv);

//creating dashlines in main div
function countLetter() {
    for( var i=0; i < wordLetters.length; i++ ) {
        var dashline = document.createElement('div');
        dashline.classList.add('dash');
        var newDiv = document.getElementById('letterDiv');
        newDiv.appendChild(dashline);
    }
}
countLetter();













