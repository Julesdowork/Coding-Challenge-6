const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const array2 = [1, "4", "2", "3", 2];
const array3 = [1,2,4,"4",591,392,"3",391,"2",2,5,10,2,1,"3",1,1,20,20]

function cleanArray(arr) {
  let stringArr = arr.filter(val => !Number.isFinite(val));
  let numArr = arr.filter(val => Number.isFinite(val));
  let stringSorted = stringArr.sort();
  let numSorted = numArr.sort((a, b) => a - b);

  let fullArr = [];

  if (numSorted.length > 0) {
    var numDuplicates = findDuplicates(numSorted)
  }
  if (stringSorted.length > 0) {
    var stringDuplicates = findDuplicates(stringSorted);
  }
  if (numDuplicates && stringDuplicates) {
    fullArr.push(numDuplicates);
    fullArr.push(stringDuplicates);
  } else if (!numDuplicates) {
    return stringDuplicates;
  } else if (!stringDuplicates) {
    return numDuplicates;
  }

  return fullArr;
}

function findDuplicates(sortedArr) {
  let combinedArr = [];
  let val = sortedArr[0];
  let duplicates = [val];

  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] === val) {
      duplicates.push(sortedArr[i]);
    } else {
      if (duplicates.length > 1) {
        combinedArr.push(duplicates);
      } else {
        combinedArr.push(duplicates[0]);
      }
      val = sortedArr[i];
      duplicates = [val];
    }
  }

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
console.log(cleanArray(array));
console.log(cleanArray(array2));
console.log(cleanArray(array3));