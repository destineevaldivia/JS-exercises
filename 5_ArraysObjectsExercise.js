// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Make an empty array named animals
let animals = [];

// Exercise 2. Add the string "frog" to the array
animals.push("frog");

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.
animals.push("bear", "bird", "snake", "puppy");

// Exercise 4. Update the first item in the array to be "gorilla"
animals.unshift("gorilla");

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)
let numOfAnimals = animals.length;
    console.log(numOfAnimals);

// Exercise 6. Print the first item in the array
console.log(animals[0]);

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)
console.log(animals[animals.length-1]);

// Exercise 8. Remove the last item from the array
animals.pop();

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.
let assortedThings = [11, "belt", 77, "hot sauce", 98, "chapstick"];

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...
const listOfAssortedThings= " ";
for (let i = 0; i < assortedThings.length; i++) {
    console.log("Item #"+ i + " is " + assortedThings[i]);
}
console.log(listOfAssortedThings);

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.

function printNumSizes (arrOfNums) {
    let arrNumSizes = " ";

    for (let i = 0; i < arrOfNums.length; i++) {
        if (arrOfNums[i] > 100) {
            console.log(`${arrOfNums[i]} BIG`);
        }
        else if (arrOfNums[i] < 0) {
            console.log(`${arrOfNums[i]} negative`);
        }
        else if (arrOfNums[i] < 100) {
            console.log(`${arrOfNums[i]} small`);
        }
    } 
}
printNumSizes([5, 400, -6]);
printNumSizes([-5, -400, -7]);
printNumSizes([2000, 200, 222]);


 
// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.
const me = {
    name: "Tim",
    favoriteAnimal: "turtles",
    favoriteNumber: 2
};

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)
me.favoriteFood = "french fries";
me.bestfriend = "Fred";

// Exercise 14. Update the favoriteAnimal value to something different
me.favoriteAnimal = "frogs";

// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.

//accessing value with dot notation
const favoriteAnimalValueDotNotation = me.favoriteAnimal;
    console.log(favoriteAnimalValueDotNotation);

//accessing value with bracket notation
const favoriteAnimalValueBracketNotation = me["favoriteAnimal"];
    console.log(favoriteAnimalValueBracketNotation);



// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
    //I found that most of the problems were easy, except for #11 was a bit more challenging and took more time to figure out syntax errors. 
    //Also, in the previous problem #10 I used a return statement, which made my code "not reachable". 
    //I understand why now (vs code interpretted the whole file as a function, for good reason and didn't run the rest of my code)
    // to resolve, I switched used console.log on line 49 instead and this fixed my errors. 

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.