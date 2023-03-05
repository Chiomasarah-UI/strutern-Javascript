/*
What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.
ANS
Mutating methods are ones that change the object after the method has been used.
 ARRAY METHODS UNDER MUTATING METHOD
 a) Append
 b) insert
 c) pop
 d) push
 e) shift

 Non-mutating methods do not change the object after the method has been used.
ARRAY METHODS UNDER NON-MUTATING
a) index
b) count
c) max-element
d) min-element
e) find*/

/* Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
Add ‘Kotlin’ to the end of the array
Add ‘Java’ after ‘Ruby’
Remove the first item in the array
Add ’Scala’ and ‘Swift’ to the beginning of the array
Replace ‘PHP’ with ‘Go’ and ‘Rust’
*/

let languages = ["c#", "JavaScript", "Ruby", "PHP", "Python"];
console.log
languages.push("Kotlin");
console.log(languages);
languages.splice(3, 0, "Java");
console.log(languages);
languages.shift();
console.log(languages);
languages.unshift("Scala", "Swift");
console.log(languages);
languages.splice(5, 1, "Go", "Swift");
console.log(languages);

/*What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

console.log(changeFruit(fruit));

ANS OUTPUT IS  
['apple', 'mango', 'orange']*/


/*  Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10*/

function largest(arr) { 
    let i;  
    let max = arr[0]; 
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) 
            max = arr[i]; 
    } 
      
  return max; 
} 
   
let arr = [4, 5, 10, -2];
console.log("maximum value is " + largest(arr));

/*Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:*/


function valTimesIndex(pit){
    return pit.map((pit,index) => pit * index);
}

let pit = [2,4,8];
console.log(valTimesIndex(pit));
