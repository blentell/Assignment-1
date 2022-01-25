const x = 6

// 7. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function addNumbers(input1, input2) {
  return input1 + input2 + x;
}
console.log(addNumbers(1, 2));

// 8. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const addNumbersAgain = (input1, input2) => input1 + input2 + x;
console.log(addNumbersAgain(1, 2))

// 9. Write a function that returns another function. (use arrow functions please)

const returnNumbers = () => addNumbersAgain;
console.log(returnNumbers()(1, 2));

// 10. given the following code:


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))

// Explain why the function that returns from getFunction still has access to "y" if "y" is not a global variable.

// insideFunc is within closure of getFunction so will have access to y anywhere it gets called, whether within the same file or any file it may be exported to.


// 11. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and console log its result.
// Make sure to handle errors that could be thrown by "couldThrowError()"

const couldThrowError = () => {
  
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error ("Error was thrown");
  }
  
  return 'success'
}

const newFunction = () => {
  try {
    couldThrowError()
  } catch (e) {
    value = 'less than 2'
    console.error(e.message, value);
  }
  return "Success"
}
console.log(newFunction());




