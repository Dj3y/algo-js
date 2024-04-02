(() => {
    // YOUR CODE HERE
    // Exercise 3.4 Write a program that will display the minimum and maximum elements of a given array.
    let array =[ 15, 9, 10, 7, 135, 900];
    let min = array[0];
    let max = array[0];
    for(let elem of array){
        if(min > elem){
            min = elem;
        }
        if( max < elem){
            max =elem;
        }
    }
    console.log("The minimum of the array is " + min);
    console.log("The maximum of the array is " + max);
})();