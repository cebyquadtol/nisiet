const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';
ctx.lineWidth = 10;
ctx.lineJoin = 'miter';
ctx.miterLimit = 1;

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.stroke();
