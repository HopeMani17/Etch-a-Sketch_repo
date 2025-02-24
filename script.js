
document.body.style.backgroundColor = "#FFEB3B";

const container = document.createElement('div');
container.id = 'container';
container.className = 'container-class';

document.body.appendChild(container);

function defaultGrid(numberOfRows, numberOfColumns){
  container.style.setProperty('--grid-rows', numberOfRows);
  container.style.setProperty('--grid-cols', numberOfColumns);
  container.style.border = '3px solid #000000'
  for (c = 0; c < (numberOfRows * numberOfColumns); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", paint);
    // cell.addEventListener("mouseout", ()=>{
    //     cell.style.background = "white";
    // });
  };
};

function paint(e) {
  e.target.style.backgroundColor = getRandomColor();
  e.target.style.filter = "brightness(90%)";
}

let size = 0;
const start = document.getElementById('start');
start.addEventListener('click', function() {
  size = prompt('Enter the number of squares per side for the new grid (value should be less than 100):');
  if (size <= 100) {
    container.innerHTML = '';
    defaultGrid(size, size);
  } else if (size > 100) {
    alert('You exceeded the limits. Please Try Again:');
  }
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
  container.innerHTML = '';
  defaultGrid(size, size);
});

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }







