// Exercise 2.2 Ask the user to enter three numbers: min, max and current. Display if current is between min and max.
    // Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)
    // Bonus 2: be polite in the error messages. (facultative)
    // new Number() converts a string to a number.
    let min = new Number(prompt("Enter a minimum number."));
    let max = new Number(prompt("Enter a maximum number."));
    let current = new Number(prompt("Enter a current number."));
    // let min = 5;
    // let max = 15;
    // let current = 10;
    if((min < max) && (current > min) && (current < max)){
        console.log("The current number is: " + current);
    }
    else if(min > max){
        console.log("You don't enter a correct minimum and maximum number.");
    }
    else{
        console.log("Somethings go wrong.");
    }