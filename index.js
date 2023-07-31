Reveal.initialize({
    slideNumber: 'c/t',
    hash: true,
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
});
// start section 4
const section4canvas = document.getElementById('section4-canvas');
const section4canvasCtx = section4canvas.getContext("2d");

section4canvasCtx.fillStyle = "blue";
section4canvasCtx.strokeStyle = 'blue';
section4canvasCtx.beginPath();
section4canvasCtx.moveTo(0, 0);
section4canvasCtx.lineTo(50, 150);
section4canvasCtx.stroke();

section4canvasCtx.fillRect(70, 50, 100, 75);

section4canvasCtx.beginPath();
section4canvasCtx.arc(250, 80, 50, 0, Math.PI * 2);
section4canvasCtx.fill();

// end section 4
// start section 5
const section5canvas = document.getElementById('section5-canvas');
const section5canvasCtx = section5canvas.getContext("2d");

// Setting fill color
section5canvasCtx.fillStyle = "blue";
section5canvasCtx.fillRect(170, 0, 70, 50);

// Setting stroke color
section5canvasCtx.strokeStyle = "red";
section5canvasCtx.strokeRect(170, 60, 70, 50);

function draw() {
    let ctx = document.getElementById('section5-canvas').getContext('2d');
    ctx.fillStyle = '#FD0';
    ctx.fillRect(0,0,50,50);
    ctx.fillStyle = '#6C0';
    ctx.fillRect(50,0,50,50);
    ctx.fillStyle = '#09F';
    ctx.fillRect(0,50,50,50);
    ctx.fillStyle = '#F30';
    ctx.fillRect(50,50,50,50);
    ctx.fillStyle = '#FFF';

    // устанавливаем значение прозрачности
    ctx.globalAlpha = 0.2;

    // Рисуем полупрозрачные круги
    for (let i=0;i<7;i++){
        ctx.beginPath();
        ctx.arc(50,50,7+7*i,0,Math.PI*2,true);
        ctx.fill();
    }
}
draw();

// end section 5
//start section 6
 function drawGradient(){
     let ctx = document.getElementById('section6-canvas').getContext('2d');
     const gradient = ctx.createLinearGradient(50, 200, 200, 250);
     gradient.addColorStop(0, "red");
     gradient.addColorStop(1, "white");

     ctx.fillStyle = gradient;
     ctx.fillRect(50, 30, 150, 100);
 }

 drawGradient();
// end section 6
// start section 7

function  drawText(){
    let ctx = document.getElementById('section7-canvas').getContext('2d');
    ctx.font = "38px Arial";
    ctx.strokeStyle = "green";
    ctx.strokeText("Hello, Canvas!", 50, 80);

}
drawText();
// end section 7
// start section 8
const canvas = document.getElementById('section8-canvas');
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

//end section 8
// start section 9

const section9Canvas = document.getElementById('section9-canvas');
const section9ctx = section9Canvas.getContext("2d");
let isSquare = true;

function drawSquare() {
    section9ctx.clearRect(0, 0, section9Canvas.width, section9Canvas.height);
    section9ctx.fillStyle = "blue";
    section9ctx.fillRect(50, 0, 100, 100);
}

function drawCircle() {
    section9ctx.clearRect(0, 0, section9Canvas.width, section9Canvas.height);
    section9ctx.beginPath();
    section9ctx.arc(100, 50, 50, 0, Math.PI * 2);
    section9ctx.fillStyle = "red";
    section9ctx.fill();
    section9ctx.closePath();
}

section9Canvas.addEventListener("click", () => {
    isSquare = !isSquare;
    if (isSquare) {
        drawSquare();
    } else {
        drawCircle();
    }
});

drawSquare();

// end section 9
