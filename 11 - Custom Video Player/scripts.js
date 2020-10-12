/* 
  ------------------------
  Element variables
  ------------------------
*/

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/*
  ------------------------
  Functions
  ------------------------
*/ 

function togglePlay() {
  // there is no 'play' property, only 'paused'
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }

  /* ternary method with computed function name
  const method = video.paused ? 'play' : 'pause';
  // computed property method  
  video[method]();
  */
}

// separating this function from body of togglePlay
function updateButton() {
  // bound to video element
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  // console.log(this.dataset);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  // computed property name
  video[this.name] = this.value
}

// creates progressbar animation
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  // updates flex-basis css property
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {

  // offsetX refers to pixel distance from x-start of 'progress'
  // offsetWidth refers to total width of 'progress'
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* 
  ------------------------
  event listeners
  ------------------------
*/

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// 'progress' event is also an option
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

progress.addEventListener('click', scrub);
// checks to see if mousedown is true; if it is, runs scrub with event as argument
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));