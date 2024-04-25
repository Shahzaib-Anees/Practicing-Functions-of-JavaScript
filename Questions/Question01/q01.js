function timeTeller (){
    let newDate = new Date();
    let date = newDate.toString();
    document.write(`<div class="card">
    <h4>Printing Date and Time in Browser using Function</h4>
    <span>Today's Date : ${date}</span>
    </div>`);
}

timeTeller();