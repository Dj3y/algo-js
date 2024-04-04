(() => {
    // YOUR CODE HERE
    /* Exercise 4.5 Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.
    Examples results:
        Point A = [1, 1], point B = [2, 2] => 1.41
        Point A = [1, 1], point B = [3, 1] => 2
        Point A = [4, 1], point B = [1, 1] => 3
        Point A = [-2, 2], point B = [2, -2] => 5.65
    Create a program to use that function.
    Write a documentation for the calcDistance function.
    Note: You probably need to make some search on Google to learn the mathematical formula to do that. You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas... */

    /*La fonction va calculer la distance entre deux points. Cette fonction doit recevoir 4 paramêtres, 2 parametres pour chaque point. 
    La formule pour calculer la distance entre 2 points est d = √(x2−x1)^2+(y2−y1)^2.
    On va utilisé deux fonctions de JS:
    -Math.pow(): cette fonction permet de calculer un chiffre en une puissance donnée. Par ex.:Math.pow(2,3) = 8
    -Math.sqrt(): cette fonction renvoie la racine carrée d'un cnombre. Par ex.: Math.sqrt(16) = 4*/
    function calcDistance(x1, y1, x2, y2){
        let pointA = Math.pow((x2 - x1),2);
        let pointB = Math.pow((y2 - y1),2);
        let distance = Math.sqrt(pointA + pointB);
        return distance;
    }
    console.log(calcDistance(-2,2,2,-2));
})();