let canvas;
let canvasSize;

let gridSize;
let cellSize;

let letterGrid;
let position;

let frameCount;

let availableKeys;


function createGrid(rowNum, colNum, defaultValue) {
  let grid = [];
  for (let i = 0; i < rowNum; i++) {
    grid[i] = [];
    for (let j = 0; j < colNum; j++) {
      grid[i][j] = defaultValue;
    }
  }
  return grid;
}

function setup() {
  frameCount = 0;
  availableKeys = [
    " ",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  gridSize = 20;
  canvasSize = 800;
  cellSize = Math.floor(canvasSize / gridSize);

  canvas = createCanvas(canvasSize, canvasSize);
  canvas.style("border: 1px solid black");

  letterGrid = createGrid(gridSize, gridSize, "");

  position = { x: 0, y: 0 };

  fill(255, 255, 255);

  textAlign(CENTER, CENTER);
  textFont("monospace", 35);
}

function draw() {
  background(255);
  stroke(0, 0, 0, 255)
  fill(150, 150, 255);
  rect(position.x * cellSize, position.y * cellSize, cellSize, cellSize);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const letter = letterGrid[i][j];

      if (letter != "") {
        fill(225, 225, 225);
        stroke(0, 0, 0, 255);
        rect(j * cellSize, i * cellSize, cellSize, cellSize);
        if (position.x == j && position.y == i) {
          fill(255, 255, 255);
        } else {
          fill(0, 0, 0);
        }
        stroke(0, 0, 0, 0);
        text(letter, cellSize / 2 + j * cellSize, cellSize / 2 + i * cellSize);
      } else {
        fill(255, 255, 255, 0);
      }
    }
    
    
    // line(0, i * cellSize, gridSize * cellSize, i * cellSize);
    // line(i * cellSize, 0, i * cellSize, gridSize * cellSize);
  }

}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    if (position.y > 0) {
      position.y--;
    }
  }
  else if (keyCode == LEFT_ARROW) {
    if (position.x > 0) {
      position.x--;
    }
  }
  else if (keyCode == DOWN_ARROW) {
    if (position.y < gridSize - 1) {
      position.y++;
    }
  }
  else if (keyCode == RIGHT_ARROW) {
    if (position.x < gridSize - 1) {
      position.x++;
    }
  }
  else if (keyCode == BACKSPACE) {
    letterGrid[position.y][position.x] = "";
  }
  
}

function keyTyped() {
  letterGrid[position.y][position.x] = key.toUpperCase();
}