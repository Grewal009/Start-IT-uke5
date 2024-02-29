let numbers = [1, 4, 6, 8, 0];

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
