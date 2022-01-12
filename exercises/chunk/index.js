// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    // slice statement that will take slice out of original array. this is the hard part right here, index + size. Then push it all into the chunked array.
    chunked.push(array.slice(index, index + size));
    // not incrementing by 1, but by size variable
    index += size;
  }
  return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     // to get the last element of the chunked array, make a temp variable
//     const last = chunked[chunked.length - 1];
//     // check to see if last element does not exist, or if length is equal to chunk size. If it is, we want to push a new chunk into chunked, with the element we are iterating over.

//     if (!last || last.length === size) {
//       // push in new chunk and element at same time
//       chunked.push([element]);
//     } else {
//       // if chunk exists but isn't full yet
//       last.push(element);
//     }
//   }
//   return chunked;
// }
