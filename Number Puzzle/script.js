let startNumber = "12345687 ";
let endNumber = "12345678 ";

updateView();
function updateView() {
  const app = document.querySelector("#root");

  let board = "";
  for (let i = 0; i < startNumber.length; i++) {
    const num = startNumber[i];
    board += `<div onclick="swapNumbers(${num})" id=${`box${i}`} class="box">${
      startNumber[i]
    }</div>`;
  }

  app.innerHTML = board;
}

function swapNumbers(num) {
  console.log(num);
  startNumber = startNumber
    .replace(" ", "X")
    .replace(num, " ")
    .replace("X", num);
  updateView();
}
