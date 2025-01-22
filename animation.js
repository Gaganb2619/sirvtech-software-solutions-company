const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fit the window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let angle = 0;
let hue = 0;
const n = 70;
const radius = 100;

// Convert HSV to RGB
function hsvToRgb(h, s, v) {
    let f = (n, k = (n + h * 6) % 6) =>
        v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return [f(5), f(3), f(1)];
}

// Draw animation frame
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2); // Center the animation

    // Calculate color
    const [r, g, b] = hsvToRgb(hue / 360, 1, 0.8);
    ctx.strokeStyle = `rgb(${r * 255}, ${g * 255}, ${b * 255})`;
    hue += 1 / n;

    // Draw circles
    ctx.beginPath();
    ctx.arc(Math.cos(angle) * radius, Math.sin(angle) * radius, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Increment angle
    angle += Math.PI / 180;

    ctx.restore();
    requestAnimationFrame(draw);
}

// Start the animation
draw();
