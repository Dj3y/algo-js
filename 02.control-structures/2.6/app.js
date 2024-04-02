(() => {
    // YOUR CODE HERE
    // Exercise 2.6 Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)
    let number = new Number(prompt("Enter a number between 1 and 7."));
    if(number == 1){
        console.log("Monday");
    }
    else if(number == 2){
        console.log("Tuesday");
    }
    else if(number == 3){
        console.log("TWednesday");
    }
    else if(number == 4){
        console.log("Thursday");
    }
    else if(number == 5){
        console.log("Friday");
    }
    else if(number == 6){
        console.log("Saturday");
    }
    else if(number == 7){
        console.log("Sunday");
    }
    else{
        console.log("The number is not between 1 and 7.");
    }
})();