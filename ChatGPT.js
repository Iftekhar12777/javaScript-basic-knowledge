function sortMaker(arr) {
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i];

    if (index < 0) {
      return "invalid number";
    } else if (arr[0] === arr[1]) {
      return "equal";
    } else if (index > 0) {
      return index;
    }
  }
}

const nums = [2, 3];

console.log(sortMaker(nums));
