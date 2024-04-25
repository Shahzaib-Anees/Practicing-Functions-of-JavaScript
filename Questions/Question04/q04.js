let userInputNum1 = +prompt("Enter First Value ");
let userInputNum2 = +prompt("Enter Second Value");
let userInputOperator = prompt("Enter Operator i.e Addition(+) , Sunstraction(-) , Multiplication(*) , Division(/) or Modulus(%");

function calculator (value1 , value2 , Operator ){
    if(Operator === "Addition" || Operator === "+"){
        let sum = value1 + value2
        document.write(`<div class="card">
        <h4>Printing Sum of User Input Values</h4>
        <span> Your Input First Value : ${value1}</span>
        <span> Your Input Second Value : ${value2}</span>
        <span> The sum of Your Input Values = ${sum}</span>
        </div>`);
    }else if(Operator === "Substraction" || Operator === "-"){
        let subs = value1 - value2;
        document.write(`<div class="card">
        <h4>Printing Substraction of User Input Values</h4>
        <span> Your Input First Value : ${value1}</span>
        <span> Your Input Second Value : ${value2}</span>
        <span> The Substraction of Your Input Values = ${subs}</span>
        </div>`);
    }else if(Operator === "Multiplication" || Operator === "*"){
        let multiply = value1 + value2;
        document.write(`<div class="card">
        <h4>Printing Multiplication of User Input Values</h4>
        <span> Your Input First Value : ${value1}</span>
        <span> Your Input Second Value : ${value2}</span>
        <span> The Multiplication of Your Input Values = ${multiply}</span>
        </div>`);
    }else if(Operator === "Division" || Operator === "/"){
        let divide = value1 / value2;
        document.write(`<div class="card">
        <h4>Printing Division of User Input Values</h4>
        <span> Your Input First Value : ${value1}</span>
        <span> Your Input Second Value : ${value2}</span>
        <span> The Division of Your Input Values = ${divide}</span>
        </div>`);
    }else if(Operator === "Modulus" || Operator === "%"){
        let modulus = value1 % value2 ;
        document.write(`<div class="card">
        <h4>Printing Modulus of User Input Values</h4>
        <span> Your Input First Value : ${value1}</span>
        <span> Your Input Second Value : ${value2}</span>
        <span> The Modulus of Your Input Values = ${modulus}</span>
        </div>`);
    }else{
        alert("Enter Correct Input")
    }
}

calculator(userInputNum1 , userInputNum2 , userInputOperator);