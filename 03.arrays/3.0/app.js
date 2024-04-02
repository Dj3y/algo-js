(() => {
    // YOUR CODE HERE
    // Exercise 3.0 Create an array that contains every learner from the class (you can find the complete list on the Discord server). Display each name in the console using a for ... of ... loop.
    let learner =["Adrien C.", "Adrien B.", "Angel", "Arnaud", "Caroline", "Denis", "Dorian", "Dylan", "Dzheylyan", "Giovanni", "Isabelle", "Jessica", "Julie", "Justine F.", "Justine L.", "Ludovic", "Lyne", "Jordan", "Manu", "Maryam", "Nataliia", "Nathanael", "Youris", "Zahra"]; 
    for(let elem of learner){
        console.log("Hi " + elem);
    }
})();