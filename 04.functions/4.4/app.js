(() => {
    // YOUR CODE HERE
    /*Exercise 4.4 Create a function pickLearner(inputAr, n) that takes 2 parameters.
    inputAr : An array of learners (the one you created in exercise 3.0 for example)
    n : A number, that should be greater than 0 and less than the length of inputAr
    The function should return an array of randomly selected learners.*/
    let inputAr = ["Adrien C.", "Adrien B.", "Angel", "Arnaud", "Caroline", "Denis", "Dorian", "Dylan", "Dzheylyan", "Giovanni", "Isabelle", "Iliess", "Jessica", "Julie", "Justine F.", "Justine L.", "Ludovic", "Lyne", "Jordan", "Maryam", "Mohamed", "Nataliia", "Nathanael", "Stacy", "Tom", "Youris", "Zahra"]; 
    // console.log(learner.length);
    // let n = 0;
    console.log(inputAr[1]);
    let n = Math.floor(Math.random() * (inputAr.length - 1) ) + 1;
    console.log("Affiche le n " + n);
    function pickLearner(inputAr, n){
        let randomLearner= [];
        for(i = 1; i <= n; i++){
            // n = Math.floor(Math.random() * (inputAr.length - 1) ) + 1;
            console.log("Affiche le i " + i);
            console.log("Affiche le n dans la boucle for " + n);
            // Cette ligne ajoute les noms restants, c'est comme s'il fait le calcule suivant la taille du tableau original - n 
            randomLearner = inputAr.slice([n]);
            // Cette ligne affiche comme si on lui demande de faire le calcule suivant la taille du tableau original + n 
            // randomLearner = inputAr.push([i]);
            // console.log(randomLearner);
        }
        return randomLearner;
        
    }
    console.log(pickLearner(inputAr, n));
    // pickLearner(learner, n);

})();