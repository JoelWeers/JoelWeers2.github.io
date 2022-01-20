"use strict";

let input = "n";

do {
    // get investment amount - loop until user enters a number
    let investment = 0;
    do {
        investment = parseFloat(
            prompt("Enter investment amount as xxxxx.xx", 10000));
    }
    while (isNaN(investment) || investment <= 0);

    // get interest rate - loop until user enters a number
    let rate = 0;
    do {
        rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
    }
    while (isNaN(rate) || rate <= 0 || rate >= 15);

    // get number of years - loop until user enters a number
    let years = 0;
    do {
        years = parseInt(prompt("Enter number of years", 10));
    }
    while (isNaN(years));

    // display initial value
    document.write(`<h4>Investment amount:${investment}  Interest Rate:${rate}  Years:${years}</h4>`);

    // calulate future value
    let futureValue = investment;
    for (let i = 1; i <= years; i++) {
        let interest = (futureValue * rate / 100)
        futureValue = futureValue + interest;

        //display the results
        document.write(`<p> Year=${i}  Interest=${interest.toFixed(2)} Value=${futureValue.toFixed(2)}</p>`);
    }

    //ask if the user wants to keep adding values
    input = prompt("do you want to keep entering values?(y,n)", "n");

    // display results
    /* document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
     document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
     document.write(`<p><label>Years:</label> ${years}</p>`);
     document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);*/

} while (input != "n");