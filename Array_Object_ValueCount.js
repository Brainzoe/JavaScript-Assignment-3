function countOccurrences(arr) {

  const counts = {};


  for (const num of arr) {
    
    if (counts[num]) {

      counts[num] += 1;
    } else {

      counts[num] = 1;
    }
  }


  return counts;
}

const inputArray = [1, 2, 2, 3, 3, 4, 4, 5, 5, 5];
const result = countOccurrences(inputArray);

console.log(result);
