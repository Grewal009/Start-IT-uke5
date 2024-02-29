let numbers = [1, 900, 99, 80, 4, 6, 8, 0];

//displayNumbers();
function displayNumbers() {
  for (let num of numbers) {
    console.log(num);
  }
}

let result = sortNumbers();
console.log("sorted : ", result);

//array is sorted or not
function sortNumbers() {
  let num = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (num > numbers[i]) {
      return false;
    }
  }
  return true;
}

//sort numeric array in ascending order
function sortNumericArrayAsc(numArray) {
  numArray.sort((a, b) => a - b);
}
function sortNumericArrayDesc(numArray) {
  numArray.sort((a, b) => b - a);
}
console.log(numbers);
sortNumericArrayAsc(numbers);
console.log("array sorted in ascending order: ", numbers);

sortNumericArrayDesc(numbers);
console.log("array sorted in descending order: ", numbers);

//sort alphabetically array
function sortAlphabeticallyArray(arr) {
  console.log("array : ", arr);
  arr.sort();
  console.log("sorted array : ", arr);
}

sortAlphabeticallyArray(["apple", "mango", "banana"]);
