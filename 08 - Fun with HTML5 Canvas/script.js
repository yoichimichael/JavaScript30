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