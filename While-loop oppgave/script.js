let number1;
let number2;

//generate random number between 1 and 10
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTwoNumbers() {
  number1 = generateRandomNumber(1, 10);
  number2 = generateRandomNumber(1, 10);
  console.log(number1, number2);

  checkNumbers();
}

function checkNumbers() {
  if (number1 == number2) {
    console.log("Equal numbers found");
  }
  while (number1 != number2) {
    generateTwoNumbers();
  }
}

generateTwoNumbers();
