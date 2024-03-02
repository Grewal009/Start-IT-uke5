let divView = "";
let randomCircleId;
let startTime = 0;
let endTime = 0;
let timeTaken = 0;
let bestTime = 0;

function updateView() {
  document.querySelector("#root").innerHTML =
    /*HTML*/
    `<div class="container">
        ${divView}
    </div>
    <h3>Time taken : ${timeTaken} seconds</h3>
    <h3 class="bestTime">Best Time : ${bestTime} seconds</h3>
    
    `;
}
drawcircle(25);
function drawcircle(num) {
  for (let i = 1; i <= num; i++) {
    divView += `<div id="circle${i}" class="circle" onclick="check(this)"></div>`;
  }
  updateView();
  selectRandomCircle();
}

function selectRandomCircle() {
  let randomNumber = Math.floor(Math.random() * 25) + 1;
  randomCircleId = "#circle" + randomNumber;
  console.log(randomCircleId);
  document.querySelector(`${randomCircleId}`).classList.add("lightOn");
  startTime = new Date().getTime();
  console.log("startTime : ", startTime);
}

function check(element) {
  console.log("elementid : ", element.id);
  console.dir("element : ", element);

  if (randomCircleId == "#" + element.id) {
    console.log("correct : ", randomCircleId, element.id);

    element.classList.remove("lightOn");
    endTime = new Date().getTime();
    console.log("endTime : ", endTime);
    timeTaken = ((endTime - startTime) / 1000).toFixed(1);
    bestTime =
      bestTime == 0 ? timeTaken : bestTime < timeTaken ? bestTime : timeTaken;
    updateView();
    selectRandomCircle();
  }
}
