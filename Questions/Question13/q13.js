let userInputString = prompt("Enter the String");
let lowerCaseString = userInputString.toLowerCase();
let userInputLetter = prompt("Enter the Letter to find its occurence in the word you enter ");
let lowerCaseLetter = userInputLetter.toLowerCase();
var letterCount = 0;

function charOccurence(str, letter) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            letterCount++;
            console.log(letter);
        }
    }
    return letterCount;
}

charOccurence(lowerCaseString, lowerCaseLetter);

document.write(`<div class="card">
    <h4>Printing the Occurences of letter "${userInputLetter}" in the Word "${userInputString}"</h4>
    <span>The Letter "${userInputLetter}" repeats ${letterCount} times in the Word "${userInputString}"</span>
    </div>`);

