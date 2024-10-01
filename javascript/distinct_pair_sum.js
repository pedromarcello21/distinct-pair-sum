function distinctPairSum(arr, k) {
  // type your code here
  //establish the list of pairs to be returned
  const pairs = []
  //create a set to keep track of unique values in the provided array
  let seen = new Set()
  for(let i = 0; i<arr.length; i++){
    //define complement to value in array to equate to k
    const complement = k-arr[i]
    //if this complement value has been seen
    if (seen.has(complement)){
      //define the pair to be lesser then greater
      let pair = [Math.min(complement, arr[i]), Math.max(complement, arr[i])]
      //check values in pairs to see if corresponding index values are in pairs
      if (!pairs.some(existingPair => existingPair[0] === pair[0] && existingPair[1] === pair[1])) {
        pairs.push(pair);
      }
    }
    //add value to seen to keep track in next loop
    seen.add(arr[i])
  }
  return pairs
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
