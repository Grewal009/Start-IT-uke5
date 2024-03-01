//Model
let inputString;
let vokalerCount;
let reverseString = "";

//View
updateView();
function updateView() {
  document.querySelector("#root").innerHTML =
    /*HTML*/
    `
    <input onchange="inputString=this.value" type="text" />
    <button onclick="reset()">reset</button><br/>
    <button onclick="countVokaler();reverseStr()">submit</button>
    <h4>String : ${inputString ?? ""}</h4>
    <h4>Result vakaler count : ${vokalerCount ?? ""}</h4>
    <h4>Reverse string : ${reverseString ?? ""}</h4>
    `;
}

//Controller

function countVokaler() {
  let acounter = 0;
  let ecounter = 0;
  let icounter = 0;
  let ocounter = 0;
  let ucounter = 0;
  let ycounter = 0;
  let æcounter = 0;
  let øcounter = 0;
  let åcounter = 0;
  console.log("string : ", inputString);

  for (let char of inputString) {
    if (char == "a") {
      acounter++;
    } else if (char == "e") {
      ecounter++;
    } else if (char == "i") {
      icounter++;
    } else if (char == "o") {
      ocounter++;
    } else if (char == "u") {
      ucounter++;
    } else if (char == "y") {
      ycounter++;
    } else if (char == "æ") {
      æcounter++;
    } else if (char == "ø") {
      øcounter++;
    } else if (char == "å") {
      åcounter++;
    } else {
      continue;
    }
  }
  vokalerCount = `a->${acounter}, e->${ecounter}, i->${icounter}, o->${ocounter}, u->${ucounter}, y->${ycounter}, æ->${æcounter}, ø->${øcounter}, å->${åcounter}`;
  console.log(
    `a->${acounter}, e->${ecounter}, i->${icounter}, o->${ocounter}, u->${ucounter}, y->${ycounter}, æ->${æcounter}, ø->${øcounter}, å->${åcounter}`
  );
  updateView();
}

function reset() {
  inputString = "";

  updateView();
}

function reverseStr() {
  for (let i = inputString.length - 1; i >= 0; i--) {
    reverseString += inputString[i];
  }
  console.log("reverse string : ", reverseString);
  updateView();
}
