const colors = ["Maroon", "Red", "Orange", "Yellow", "Olive", "Green", "Purple", "Fuchsia", "Lime", "Teal", "Aqua", "Blue", "Navy", "Black", "Gray", "Silver", "White"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
let span = document.getElementById('color-span');

btn.addEventListener("click", function () {
  const numGen = getNumGen();
  console.log(numGen);
  document.body.style.backgroundColor = colors[numGen];
  color.textContent = colors[numGen];
  span.style.color = color[numGen];
});

function getNumGen() {
  return Math.floor(Math.random() * colors.length);
}
