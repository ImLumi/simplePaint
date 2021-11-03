/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let painting = false;
let color = 'black';
function draw(e) {
  if (painting) {
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
}
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '20px Arial';
  const gap = 25;
  ctx.fillStyle = 'LightSteelBlue';
  ctx.fillRect(canvas.width - 130, 0, 112, gap * 7 + 10);
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'black';
  ctx.strokeRect(canvas.width - 130, 0, 112, gap * 7 + 10);
  ctx.fillStyle = 'white';
  ctx.fillText('c : törlés', canvas.width - 120, gap);
  ctx.fillStyle = 'red';
  ctx.fillText('r : Red', canvas.width - 120, gap * 2);
  ctx.fillStyle = 'green';
  ctx.fillText('g : Green', canvas.width - 120, gap * 3);
  ctx.fillStyle = 'blue';
  ctx.fillText('b : Blue', canvas.width - 120, gap * 4);
  ctx.fillStyle = 'brown';
  ctx.fillText('w : Browns', canvas.width - 120, gap * 5);
  ctx.fillStyle = 'gold';
  ctx.fillText('y : Yellow', canvas.width - 120, gap * 6);
  ctx.fillStyle = 'black';
  ctx.fillText('k : Black', canvas.width - 120, gap * 7);
}
clearCanvas();
const startPosition = (e) => {
  painting = true;
  ctx.beginPath();
  draw(e);
};
const finishedPosition = () => { painting = false; };

/** @param {KeyboardEvent} e */
function keydownHandler(e) {
  switch (e.key) {
    case 'c': { clearCanvas(); break; }
    case 'r': { color = 'red'; break; }
    case 'g': { color = 'green'; break; }
    case 'b': { color = 'blue'; break; }
    case 'w': { color = 'brown'; break; }
    case 'y': { color = 'gold'; break; }
    case 'k': { color = 'black'; break; }
    default:
  }
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);
window.addEventListener('keydown', keydownHandler);
