let startNumber = "12345687 ";
let endNumber = "12345678 ";

updateView();
function updateView() {
  const app = document.querySelector("#root");

  let board = "";
  for (let i = 0; i < startNumber.length; i++) {
    board += `<div onclick="swapNumbers(${i})" id=${`box${i}`} class="box">${
      startNumber[i]
    }</div>`;
  }

  app.innerHTML = board;
}

function swapNumbers(i) {
  const num = startNumber.charAt(i);

  startNumber = startNumber
    .replace(" ", "x")
    .replace(num, " ")
    .replace("x", num);

  console.log(startNumber);

  updateView();
}
