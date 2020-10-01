const canvas = document.querySelector('#draw');

// the context is what actually gets 'drawn' on
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// set the way the brush behaves
ctx.strokeStyle = '#BADA55';
ctx.linJoin = 'round';
ctx.linCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0; 

function draw(e) {
  if(!isDrawing) return; // will stop function from running if not mousedown
  console.log(e)
}

// function inside draw will only run on mousedown
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);