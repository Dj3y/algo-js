(() => {
    // YOUR CODE HERE
    /*Exercise 5.1 Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:
    Name
    Production year
    Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format. */

function askTvSerie(){
    let name = prompt("Enter the name of your favorite TV serie.");
    let productionYear = prompt("Enter the year of production.");
    let castMembers = prompt("Enter the name of the cast member.");
    let askCast = prompt("Do you want enter another name of the cast members?");
    // do{
    //     castMembers = prompt("Enter the name of the cast member.");
    //     askCast = prompt("You want enter another name of the cast members?");
    // }
    // while(askCast.toLocaleLowerCase() === "yes");
    while(askCast.toLocaleLowerCase() === "yes"){
        let anotherCastMembers = prompt("Enter the name of the cast member.");
        askCast = prompt("Do you want enter another name of the cast members?");
    };
    console.log(name + productionYear + castMembers + anotherCastMembers + askCast);
}
askTvSerie();
})();