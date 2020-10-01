const canvas = document.querySelector('#draw');

// the context is what actually gets 'drawn' on
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;