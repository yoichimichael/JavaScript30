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

  // below code will only run on mousedown
  console.log(e)
  ctx.beginPath();

  // starts from
  ctx.moveTo(lastX, lastY);

  // goes to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();


  // lastX = e.offsetX;
  // lastY = e.offsetY;
  // fancy ES6 syntax for above; 'destructuring an array'
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// function inside draw will only run on mousedown
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  // starts drawing at mousedown, not [x=0, y=0]
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);