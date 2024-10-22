const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas to the document's full height
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight; // Dynamically set canvas height based on content
}
resizeCanvas(); // Call the function initially
window.addEventListener('resize', resizeCanvas); // Resize when window is resized

const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00FF00';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);
