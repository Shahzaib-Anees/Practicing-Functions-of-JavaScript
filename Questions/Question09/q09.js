let userInputWidth = +prompt("Enter the Width of Rectangle in Number");
let userInputHeight = +prompt("Enter the Height of Rectangle in Number");
document.write("<br>")
document.write(`<p> Formula for Finding Hypotenuse <br>  <strong>Area = Width * Height</strong></p>`)
function areaCalculator (userInputWidth,userInputHeight){
   let areaOf = userInputWidth * userInputHeight;
   console.log("Area of Rectangle :" + areaOf);
   document.write(`<div class="card">
   <h4>Printing Area of Triangle from User Input Values</h4>
   <span> Your Input Width : ${userInputWidth}</span>
   <span> Your Input Height : ${userInputHeight}</span>
   <span> The Calculated Area of Rectangle = ${areaOf} </span>
   </div>`); 
} 

areaCalculator(userInputWidth,userInputHeight);