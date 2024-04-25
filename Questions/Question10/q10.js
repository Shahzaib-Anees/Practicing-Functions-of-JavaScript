// Palidrome is a string which has same word i.e backward or forward e.g madam , NaN ....etc...

let userInputString = prompt("Enter a String to check if it is Palidrome or not");
let stringLength = userInputString.length;
function stringPalidrome(userInputString) {
    for (var i = 0; i < stringLength / 2; i++) {
        if (userInputString[i] === userInputString[stringLength - 1 - i]) {
            document.write(`<div class="card">
            <h4>Checking whether Input string is Palidrome or not</h4>
            <span> Your Input String : ${userInputString}</span>
            <span> The above entered string is Palidrome String</span>
            </div>`);
        } else {
            document.write(`<div class="card">
            <h4>Checking whether Input string is Palidrome or not</h4>
            <span> Your Input String : ${userInputString}</span>
            <span> The above entered string is not a Palidrome String</span>
            </div>`);
        }
    }
}