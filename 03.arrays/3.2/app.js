(() => {
    // YOUR CODE HERE 
    // Exercise 3.2. Write a program that will calculate the average value of a given array.
    // Test it with the following arrays:
    // [1, 2, 3, 4, 5] => 3
    // [100, 101, 102] => 101
    let arr1 = [1, 2, 3, 4, 5];
    let averageArr1 = 0;
    let sum1 = 0; 

    for(let elem of arr1){
        sum1 = sum1 + elem;
        // console.log("sum " + sum);
        averageArr1 = sum1 / arr1.length;
    }
    // Console.log à l'exterieur de la boucle pour afficher que le resultat final une fois que le boucle a fini d'être executé
    console.log("Average of Array 1: " + averageArr1);

    let arr2 = [100, 101, 102];
    let averageArr2 = 0;
    let sum2 = 0;
    for(let elem of arr2){
        sum2 = sum2 + elem;
        averageArr2 = sum2 / arr2.length;
    }
    // Console.log à l'exterieur de la boucle pour afficher que le resultat final une fois que le boucle a fini d'être executé
    console.log("Average of Array 2: " + averageArr2)
})();