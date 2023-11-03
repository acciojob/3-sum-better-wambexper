function threeSum(arr, target) {
// write your code here
	  arr.sort((a, b) => a - b);

  let closestSum = Infinity;
  let closestDiff = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      const currentDiff = Math.abs(currentSum - target);

      if (currentDiff < closestDiff) {
        closestDiff = currentDiff;
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
  
}

module.exports = threeSum;