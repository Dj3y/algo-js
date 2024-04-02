(() => {
    // YOUR CODE HERE
    // Exercise 3.3 Write a program that will create a duplicate of a given array.
    // Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on MDN or Google for this one.)
    // Using push(): adds the specified elements to the end of an array 
    // La methode push() va "pousser" le tableau initial dans une autre variable mais ne crée pas une copie si on modifie le tableau principal la copie est aussi modifiée
    let array =[7, 24, 11, 21];
    console.log("Array " + array);
    let copyArray = [];
    copyArray.push(array);
    console.log("Duplicate array " + copyArray);
    array.push(36);
    console.log(array);
    console.log(copyArray);
   
    // Les methodes suivants crée une copie du tableau original si on modifie le tableau original la copie n'est pas modifiée
    let array1 = [3, 9, 26, 6];
    console.log("Array 1" + array1);
    // - Create a copy using spread syntax.
    // let copyArray1 = [...array1];
    // Create a copy using the from() method.
    // let copyArray1 = Array.from(array1);
    // Create a copy using the slice() method.
    let copyArray1 = array1.slice();
    console.log(" Duplicate array 1" + copyArray1);

})();