(() => {
    // YOUR CODE HERE
    //  Exercise 4.2 Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.
    // Write a documentation for the rand10() function.
    // You will have to search on Google how to generate random numbers in JavaScript for this exercise.
    // la fonction va nous afficher un chiffre entier aléatoire entre 1 et 10. Pour cela il faut utilisé deux fonctions: Math.random() et Math.floor() 
    // Math.random() retourne un chiffre aléatoire entre 0 (inclusive) et 1 (exclusive). Le nombre retourné est toujours inférieur à 1.
    // Math.floor() utilisé pour retourné un chiffre entier. cette fonction retourne le nombre entier qui est inférieur ou égal à  x.
    // Pour afficher un nombre aléatoire entre 1 et 10 il faut multiplier par 10 et faire +1 pour commence à 1
    function rand10(){
        return Math.floor(Math.random() * 10) + 1;
    }
    console.log(rand10());
})();