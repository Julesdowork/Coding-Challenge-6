function cleanArray(arr) {
  // separate arr into two arrays, one for Numbers and one for Strings
  let stringArr = arr.filter(val => !Number.isFinite(val));
  let numArr = arr.filter(val => Number.isFinite(val));

  let stringSorted = stringArr.sort();
  let numSorted = numArr.sort((a, b) => a - b);

  let fullArr = [];     // the array containing both arrays

  if (numSorted.length > 0) {
    var numDuplicates = findDuplicates(numSorted)
  }
  if (stringSorted.length > 0) {
    var stringDuplicates = findDuplicates(stringSorted);
  }

  if (numDuplicates && stringDuplicates) {  // if both arrays have elements
    fullArr.push(numDuplicates);
    fullArr.push(stringDuplicates);
  } else if (!numDuplicates) {              // don't return an empty Number array
    return stringDuplicates;
  } else if (!stringDuplicates) {           // don't return an empty String array
    return numDuplicates;
  }

  return fullArr;
}

// Finds all the values with duplicates and return them.
// Because the array is sorted, all duplicates will be next to each other.
function findDuplicates(sortedArr) {
  let combinedArr = [];     // the final array
  let val = sortedArr[0];
  let duplicates = [val];   // assume the first value has duplicates

  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] === val) {
      duplicates.push(sortedArr[i]);
    } else {
      if (duplicates.length > 1) {
        combinedArr.push(duplicates);   // add duplicates in their own array
      } else {
        combinedArr.push(duplicates[0]);  // just add the value
      }
      val = sortedArr[i];
      duplicates = [val];               // start over
    }
  }

  // Just in case the last value didn't have duplicates
  if (duplicates.length > 1) {
    combinedArr.push(duplicates);
  } else {
    combinedArr.push(duplicates[0]);
  }

  return combinedArr;
}

console.log(cleanArray([1]));
console.log(cleanArray([2, 1]));
console.log(cleanArray([2, 4, 1]));
console.log(cleanArray([2, 1, 4, 1]));
console.log(cleanArray(["2", "1", "4", "1"]));
console.log(cleanArray(["2", "1", "24", "15"]));
console.log(cleanArray([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]));
console.log(cleanArray([1,2,4,591,392,391,2,5,10,591,2,1,1,1,20,20]));
console.log(cleanArray([1, "4", "2", "3", 2]));
console.log(cleanArray([1,2,4,"4",591,392,"3",391,"2",2,5,10,2,1,"3",1,1,20,20]));