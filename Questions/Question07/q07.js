let userInputNum1 = +prompt("Enter Start Value of Counting");
let userInputNum2 = +prompt("Enter End Value of Counting");

function countingGenerator(userInputNum1, userInputNum2) {
    document.write( `<h4>Printing Counting from ${userInputNum1} to ${userInputNum2}</h4>`)
    for (i = userInputNum1; i <= userInputNum2; i++) {
        document.write(`<div class="card">
        <span>${i}</span>
        </div>`);
    }
}

countingGenerator(userInputNum1, userInputNum2);