const canvas = document.querySelector('#draw');

// the context is what actually gets 'drawn' on
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// set the way the brush behaves
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

// adds a 'photoshop blend mode' type effect
ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0; 
let hue = 0;
let direction = true;

function draw(e) {
  if(!isDrawing) return; // will stop function from running if not mousedown

  // below code will only run on mousedown
  // console.log(e)
                  // hue, saturation, lightness  
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
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

  // increments hsl hue
  hue++
  // below resets hue value, but is unecessary; 360 === 0; 361 === 1; etc
  if(hue >= 360) {
    hue = 0;
  }
  
  // lineWidth increases and decreases between 0 and 100
  // hitting 100 or 0 flips the direction
  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
    direction = !direction; 
  }
  if(direction){
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
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