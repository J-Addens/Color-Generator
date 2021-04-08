const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
let span = document.getElementById('color-span');

btn.addEventListener("click", function () {
  let colorHex = "#";
  for (let i = 0; i < 6; i++){
    colorHex += hex[getNumGen()];
  }
  color.textContent = colorHex;
  document.body.style.backgroundColor = colorHex
  span.style.color = colorHex
});

function getNumGen() {
  return Math.floor(Math.random() * hex.length);
}
