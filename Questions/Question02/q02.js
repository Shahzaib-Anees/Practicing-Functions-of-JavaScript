let userFirstName = prompt("Enter your First Name");
let userLastName = prompt("Enter your Last Name");
function userGreeter(FirstName, LastName) {
    let fullName = FirstName + " " + LastName;
    document.write(`<div class="card">
   <h4>Greeting User with the help of Function</h4>
   <span>Hello ${fullName} ! A very Good Morning to you</span>
   </div>`);
}

userGreeter(userFirstName, userLastName);