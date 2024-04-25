let userInputNumber = +prompt("Enter a Number / Integer");
function expotentialFunction(value){
    let result = value * value;
    document.write(`<div class="card">
    <h4>Printing Exponent of User Input Values</h4>
    <span> Your Input Value : ${userInputNumber}</span>
    <span> The Exponent of Your Input Value = ${result}</span>
    </div>`);
}

expotentialFunction(userInputNumber);