//moodle oppgave for-løkke
//for loop
console.log("for løkke");
for (let i = 1; i <= 10; i++) {
  console.log(i * 2);
}

//while løkke
console.log("while løkke");
let counter = 1;
while (true) {
  if (counter > 10) {
    break;
  }
  console.log(counter * 2);
  counter++;
}

//do-while løkke
let i = 1;
console.log("do-while løkke");
do {
  console.log(i * 2);
  i++;
} while (i <= 10);

//for-of løkke
let arr = [10, 20, 30];
console.log("for-of løkke");
for (let a of arr) {
  console.log(a);
}
