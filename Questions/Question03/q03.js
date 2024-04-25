alert("Enter two Numbers/Integers to get their Sum")
let userInputNum1 = +prompt("Enter first Value");
let userInputNum2 =+prompt("Enter Second Value")
function sum (num1 , num2){
  let numSum = num1 + num2;
  document.write(`<div class="card">
    <h4>Printing Sum of User Input Values</h4>
    <span> Your Input First Value : ${userInputNum1}</span>
    <span> Your Input Second Value : ${userInputNum2}</span>
    <span> The sum of Your Input Values = ${numSum}</span>
    </div>`);
}

sum(userInputNum1,userInputNum2);