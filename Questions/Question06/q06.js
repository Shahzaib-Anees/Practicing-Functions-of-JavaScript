let userInputNumber = +prompt("Enter the Number to get its Factorial");
function factorialFunction(userInputNumber) {
    var answer ;
    for (var i = 1 ; i<=userInputNumber ; i++){
      var modulus =  userInputNumber % i ;
        if(modulus === 0){
            answer = i * 1 ;
            document.write(`<div class="card">
            <h4>Printing Factorial of User Input Values</h4>
            <span> Your Input Value : ${userInputNumber}</span>
            <span> The Factorial of ${userInputNumber} = ${answer}</span>
            </div>`);
        }
    }
}

factorialFunction(userInputNumber);
