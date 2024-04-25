let userInputBase = +prompt("Enter Base of triangle in number here");
let userInputPerp = +prompt("Enter Perpendicular of triangle in number here")
document.write("<br>");
function hypotenuseCalculator(userInputBase, userInputPerp) {
    document.write(`<p> Formula for Finding Hypotenuse <br> =<strong>Hypotenuse<sup>2</sup> = Base<sup>2</sup> + Perpendicular</sup>2<sup></strong></p>`)
    function squareCalculator(userInputBase, userInputNumber) {
        let baseSquare = userInputBase * userInputBase;
        let perpSquare = userInputPerp * userInputPerp;
        let hypotenuseSquare = baseSquare + perpSquare;
        console.log(hypotenuseSquare);
        document.write(`<div class="card">
        <h4>Printing Square Value of Hypotenuse</h4>
        <span> Your Base Value : ${userInputBase}</span>
        <span> Your Perpendicular Value : ${userInputPerp}</span>
        <span> The Square of base = ${baseSquare}</span>
        <span> The Square of Perpendicular = ${perpSquare}</span>
        <span> The Square of Hypotenuse = ${hypotenuseSquare}</span>
        </div>`);
        return hypotenuseSquare;
    }

    let hypotenuse = squareCalculator(userInputBase,userInputPerp);
    let result = hypotenuse ** (1/2);
    console.log(result);
    document.write(`<div class="card">
    <h4>Printing Hypotenuse of a Triangle</h4>
    <span> Your Base Value : ${userInputBase}</span>
    <span> Your Perpendicualr Value : ${userInputPerp}</span>
    <span> The Value of Hypotenuse of a triangle = ${result.toFixed(3)}</span>
    </div>`);
}

hypotenuseCalculator(userInputBase, userInputPerp);
