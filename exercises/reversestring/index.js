// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = "";

  // instead of for (var i = 0; i < str.length; i++)
  for (let character of str) {
    reversed = character + reversed;
    // debugger;
  }
  return reversed;
}

// reverse("asdf");

module.exports = reverse;

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   let reversed = "";

//   // instead of for (var i = 0; i < str.length; i++)
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   //   debugger;
//   // turn it into an array.
//   // reduce is used to take all different values of an array, and condense into one single value. 2 args, arrow function, second is a starting initial value for our function

//   // When reduce runs, it's going to take the starting argument, pass it into the arrow function as the first argument, whatever gets returned from that inner function, will be used as starting argument of each successive run of the function. In total function runs one time for every element in the array. First value passed in is our reversed string.
//   return str.split("").reduce((reversed, character) => {
//     return character + reversed;
//   }, "");

//   // can simplify syntax
//   //   return str.split('').reduce((rev, char) => char + rev, '');
// }
