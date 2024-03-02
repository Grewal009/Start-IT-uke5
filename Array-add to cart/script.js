let items = [];
let itemsList = "none";
let newItem = "";

updateView();
function updateView() {
  document.querySelector("#root").innerHTML =
    /*HTML*/
    `
    <input onchange="newItem=this.value" type="text" placeholder="Enter item" />
    <button onclick="addItem(newItem)">Add to cart</button>
    <button onclick="emptyCart()">Empty cart</button>

    <p>Items in cart : ${itemsList}</p>
    <ul></ul>
    `;
}

function addItem(item) {
  items.push(item);
  console.log(item);
  generateItemsList();
  updateView();
}

function generateItemsList() {
  itemsList = "";
  for (let item of items) {
    itemsList += `<li>${item}</li>`;
  }
}

function emptyCart() {
  items = [];
  newItem = "";
  itemsList = "none";
  updateView();
}
