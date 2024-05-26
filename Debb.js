//Function that reverses a given string
//Step 1: Create an array of strings 

 function reverseString(inputString){
    let reverseString = "";
    for (let i = inputString.length - 1;i >= 0; i--){
        reverseString += inputString[i];
    }
    return reverseString;
 }
 console.log(reverseString("hello"));

  
 //Count Characters: Create a function that counts the number of characters in a string.
 function countcharacter(str){
    return str.lenght;

 }
 const sample = "Hello, World";
 const characterCount = countcharacter(sample);
 console.log(`The string "${sample}" has ${characterCount} characters.`);

 //Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
 function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
  
  // Example usage
  const exampleSentence = "hello world, this is a test sentence.";
  const capitalizedSentence = capitalizeWords(exampleSentence);
  console.log(capitalizedSentence);

  
  //Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  // Example usage
  const numbers = [3, 5, 7, 2, 8];
  console.log(`Maximum: ${findMax(numbers)}`); // Output: Maximum: 8
  console.log(`Minimum: ${findMin(numbers)}`); // Output: Minimum: 2
  

  //Sum of Array: Create a function that calculates the sum of all elements in an array.
  function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  // Example usage
  console.log(`Sum: ${sumArray(numbers)}`); // Output: Sum: 25

  //Filter Array: Implement a function that filters out elements from an array based on a given condition.
//Mathematical Functions:
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
  }
  
  // Example usage
  const isEven = num => num % 2 === 0;
  console.log(`Filtered (Even Numbers): ${filterArray(numbers, isEven)}`); // Output: Filtered (Even Numbers): [2, 8]
  
  //Factorial: Write a function to calculate the factorial of a given number.
  function factorial(n) {
    if (n < 0) return -1; // Factorial of a negative number doesn't exist
    if (n === 0) return 1; // Factorial of 0 is 1
    return n * factorial(n - 1);
  }
  
  // Example usage
  console.log(`Factorial of 5: ${factorial(5)}`); // Output: Factorial of 5: 120
  
  //Prime Number Check: Create a function to check if a number is prime or not.
  function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    const fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
  }
  
  // Example usage
  console.log(`Fibonacci sequence of 7 terms: ${fibonacci(7)}`); // Output: Fibonacci sequence of 7 terms: [0, 1, 1, 2, 3, 5, 8]
  
  //Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
  function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    const fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
  }
  
  // Example usage
  console.log(`Fibonacci sequence of 7 terms: ${fibonacci(7)}`); // Output: Fibonacci sequence of 7 terms: [0, 1, 1, 2, 3, 5, 8]
  