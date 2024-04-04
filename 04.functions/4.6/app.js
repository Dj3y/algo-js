(() => {
    // YOUR CODE HERE
    /* Exercice4.6 Create a function factorial(a) that returns the factorial of a number.
    That function must be recursive.*/
    // !!! Le factorielle de 0 est 1. !!!
    function factorial(a){ 
        let result = a;
        if(a == 0 || a == 1){
            return 1;
        }
        while(a > 1){
            a--;
            result *= a;
        }
        return result;
      } 
      let a = 1;
      console.log("The factorial of " + a + " is " + factorial(a)); 
})();