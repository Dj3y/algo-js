(() => {
    // YOUR CODE HERE
    // Exercise 4.1 Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.
    // Write a documentation for the calcSurface function.
    
    // la fonction calcule la surface d'un rectangle. Cette fonction prend deux parametres qui sont dans ce cas la longueur et la largeur d'un rectangle.
    // function calcSurface(a, b){
    //     let surface = a * b;
    //     console.log("The surface of the rectangle with length " + a + " and width " + b + " is " + surface + ".");
    // }
    let length = prompt("Entrer la longueur du rectancgle.");
    let width = prompt("Encoder la largeur du rectangle.");
    // calcSurface(length, width);
    // Arrow functions 
    // let calcSurface = (a, b) =>{
    //     console.log("The surface of the rectangle with length " + a + " and width " + b + " is " + a * b + ".");
    // }
    // calcSurface(length, width);
    let calcSurface = (a,b) => console.log("The surface of the rectangle with length " + a + " and width " + b + " is " + a * b + ".");
    calcSurface(length, width);
})();