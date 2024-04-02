(() => {
    // YOUR CODE HERE
    // Exercise 2.3 Display all even numbers between 1 and 100.
    // Bonus: do two different versions. The first one should use while and make a loop that will execute 100 times. The second one should use for and make a loop that will execute 50 times.
    
    // for(i = 1; i < 100; i++){
    //     if(i % 2 === 0){
    //         console.log(i);
    //     }
    // }

    let a = 1;
    while(a < 100){
        if(a % 2 ===0){
            console.log(a);
        }
        a++;
    }
})();