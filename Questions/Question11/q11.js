let userInputString = prompt("Enter a Sentence String");
let userInputStringArray = userInputString.split(" ");
let arr1 = [];
console.log(userInputStringArray);

function tittleCaseString(userInputString) {
    for (var i = 0; i < userInputStringArray.length; i++) {
        arr1.push(userInputStringArray[i].charAt(0).toUpperCase() + userInputStringArray[i].slice(1).toLowerCase());
        console.log(arr1);
    }
    return arr1;
}

tittleCaseString(userInputString);
document.write(`<div class="card">
<h4>Converting first letter of Input string to UpperCase</h4>
<span> Your Input String : ${userInputString}</span>
<span> Output : ${arr1.join(" ")}</span>
</div>`);
