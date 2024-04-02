(() => {
    // YOUR CODE HERE
    //Exercise 3.1 Write a program that will add all the elements of an array.
    //Test it with the following arrays:
    //[1, 2, 3, 4, 5] => 15
    //[100, 101, 102] => 303
    let arr1 = [1, 2, 3, 4, 5];
    let sumArr1 = 0;
    
    for(let elem of arr1){
        sumArr1 = sumArr1 + elem;
    }
    // Console.log à l'exterieur de la boucle pour afficher que le resultat final, une fois que le boucle a fini d'être executé
    console.log("Sum of array 1 " + sumArr1);

    let arr2 = [100, 101, 102];
    let sumArr2 = 0;
    for(let elem of arr2){
        sumArr2 = sumArr2 + elem;
    }
    // Console.log à l'exterieur de la boucle pour afficher que le resultat final, une fois que le boucle a fini d'être executé
    console.log("Sum of array 2 " + sumArr2);
})();