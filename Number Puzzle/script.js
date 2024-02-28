let startNumber = "12345687 ";
let endNumber = "12345678 ";

updateView();
function updateView() {
  const app = document.querySelector("#root");

  let board = "";
  for (let i = 0; i < startNumber.length; i++) {
    const num = startNumber[i];

    //if argument to onclick function is string then use '' or "" instead of ``
    //If num is " "
    //  '${num}' -> (' ')
    //  `${num}` -> ( )

    board += `<div onclick="swapNumbers('${num}')" id=${`box${i}`} class="box">${
      startNumber[i]
    }</div>`;
  }

  app.innerHTML = board;
}

function swapNumbers(num) {
  // num = num ?? " ";
  console.log(num);
  console.log(startNumber);
  startNumber = startNumber
    .replace(" ", "x")
    .replace(num, " ")
    .replace("x", num);

  console.log(startNumber);

  updateView();
}
