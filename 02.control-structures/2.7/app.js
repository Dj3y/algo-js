(() => {
    // YOUR CODE HERE
    // Exercise 2.7 Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.
    // Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.
    let n = new Number(prompt("Please enter a number."));
    let sum = 0;
    for(i = 0; i < n; i++){
        let n = new Number(prompt("Please enter a number."));
        sum = sum + n;
        console.log(sum);
    }
})();