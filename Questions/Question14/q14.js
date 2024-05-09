let inputRadius = +prompt("Enter the Radius of the circle here :")
let pie = 22/7;
let radiusSquare = inputRadius * inputRadius
function calcArea(inputRadius) {
    let area = pie * radiusSquare;
    document.write(`<div class="card">
    <h4>Printing the Area of the Circle:</h4>
    <span> Your Input Radius : ${inputRadius}</span>
    <span> The Area of the Circle : ${area.toFixed(3)}</span>
    </div>`);

}

function calcCircumference(inputRadius) {
    let circumference = 2 * pie * radiusSquare;
    document.write(`<div class="card">
    <h4>Printing the Cricumference of the Circle:</h4>
    <span> Your Input Radius : ${inputRadius}</span>
    <span> The Circumference of the Circle : ${circumference.toFixed(3)}</span>
    </div>`);

}

calcArea(inputRadius);
calcCircumference(inputRadius);