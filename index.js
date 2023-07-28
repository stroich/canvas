Reveal.initialize({
    slideNumber: 'c/t',
    hash: true,
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
});


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const ballRadius = 20;
let x = ballRadius + 5;
let dx = 2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, canvas.height / 2, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#932693";
    ctx.fill();
    ctx.closePath();
}

function animateBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    x += dx;
    requestAnimationFrame(animateBall);
}

animateBall();

