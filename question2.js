function getOperands(arr, target) {
  let nums = [];

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let matchFound = false;

    while (!matchFound && j < arr.length) {
      if (arr[i] + arr[j] === target) {
        matchFound = true;
        let matches = [arr[i], arr[j]];
        nums.push(matches);
        arr.splice(j, 1);       // remove second operand
      } else {
        j++;
      }
    }
  }

  return nums;
}

console.log(getOperands([], 1));
console.log(getOperands([1], 1));
console.log(getOperands([1,2], 2));
console.log(getOperands([1,2], 3));
console.log(getOperands([1,2,3], 4));
console.log(getOperands([1,2,3,4], 5));
console.log(getOperands([1,2,3,4,5], 6));
console.log(getOperands([1,2,3,4,5], 21));
console.log(getOperands([-1,0,3,4,5,-2], 3));