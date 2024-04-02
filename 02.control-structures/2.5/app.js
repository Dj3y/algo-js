(() => {
    // YOUR CODE HERE
    // Exercise 2.5 Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).
    let nb = new Number(prompt("What's your favorite number."));
    // nb = 42;
    while(nb !== 42){
        console.log("Are you sure?");
        let nb = new Number(prompt("What's your favorite number."));
        if(nb == 42){
            break;
        }
    }
})();