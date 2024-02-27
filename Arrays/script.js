let fruits = ["apple", "orange", "grapes"];

updateView();
function updateView() {
  document.querySelector("#root").innerHTML =
    /*HTML*/
    `
    <input onchange="addFruit(this.value)" type="text" />
    <h3 >Fruits list : </h3>
    <ul>${generateList()}</ul>
    `;
}

function generateList() {
  let list = "";
  for (let i = 0; i < fruits.length; i++) {
    list += `<li onclick="changeFruitToWatermelon(${i})">${fruits[i]}</li>`;
  }
  return list;
}

function addFruit(val) {
  fruits.push(val);
  updateView();
}

//onclick="removeFruit(${i})"
function removeFruit(itemIndex) {
  console.log(itemIndex);
  fruits.splice(itemIndex, 1);
  updateView();
}

function changeFruitToWatermelon(itemIndex) {
  console.log(itemIndex);
  fruits.splice(itemIndex, 1, "watermelon");
  updateView();
}
