let startNumber = "1234567 8";
let endNumber = "12345678 ";

updateView();
function updateView() {
  const app = document.querySelector("#root");

  let board = "";
  for (let i = 0; i < startNumber.length; i++) {
    board += `<div onclick="swapNumbers(${i})" class="box">${startNumber[i]}</div>`;
  }

  app.innerHTML = board;
}

function swapNumbers(i) {
  const blank = startNumber.indexOf(" ");
  if (!isClickedBoxNeighbourOfBlankBox(i, blank)) return;

  const num = startNumber.charAt(i);
  startNumber = startNumber
    .replace(" ", "x")
    .replace(num, " ")
    .replace("x", num);

  console.log(startNumber);
  updateView();
}

function isClickedBoxNeighbourOfBlankBox(clickedIndex, blankIndex) {
  //blank box index(row,col)
  const blankBoxRow = getRowNumber(blankIndex);
  console.log("blankBoxRow : ", blankBoxRow);
  const blankBoxCol = getColumnNumber(blankIndex);
  console.log("blankBoxCol : ", blankBoxCol);

  //clicked  box index(row,col)
  const clickedBoxRow = getRowNumber(clickedIndex);
  console.log("clickedBoxRow : ", clickedBoxRow);
  const clickedBoxCol = getColumnNumber(clickedIndex);
  console.log("clickedBoxCol : ", clickedBoxCol);

  if (
    (blankBoxRow == clickedBoxRow &&
      Math.abs(blankBoxCol - clickedBoxCol) == 1) ||
    (Math.abs(blankBoxRow - clickedBoxRow) == 1 && blankBoxCol == clickedBoxCol)
  ) {
    return true;
  } else {
    return false;
  }
}

function getColumnNumber(index) {
  return index % 3;
}

function getRowNumber(index) {
  return Math.floor(index / 3);
}
