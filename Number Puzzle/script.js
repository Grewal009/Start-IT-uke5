let startNumber = "12345687 ";
let endNumber = "12345678 ";

updateView();
function updateView() {
  const app = document.querySelector("#root");

  let board = "";
  for (let i = 0; i < startNumber.length; i++) {
    board += `<div id=${`box${i}`} class="box">${startNumber[i]}</div>`;
  }

  app.innerHTML = board;
}
