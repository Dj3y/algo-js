(() => {
    // YOUR CODE HERE
    // Exercise 4.3 By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.
    // Write a documentation for the multiRand(n) function.
    // Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.

    n = prompt("Entrer la taille du tableau");
    /* Cette fonction va créer un tableau vide. Le tableau va avoir la longueur de la valeur n, n est le paramètre de la fonction. 
    La boucle for va être répéter n(paramètre fonction) fois tant que i est inférieur à n. A chaque éxecution de la boucle la fonction rand10(), fonction pour avoir un chiffre aléatoire entre 1 et 10, va être éxecuté et la valeur aléatoire va être ajouter au tableau grâce au push().
    Une fois qu'on affiche la fontion dans la console le tableau va être affiché avec les valeurs aléatoires.*/
    
    function multiRand(n){
        let arrayN = [];
        for(i = 0; i < n; i++){  
            function rand10(){
                return Math.floor(Math.random() * 10) + 1; 
            }
            arrayN.push(rand10());
        }
        return arrayN;
        
    }
    console.log(multiRand(n));
    
})();