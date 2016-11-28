'use strict';

var canvas = document.querySelector('#canvas');
var brush = canvas.getContext('2d');

// //dip in color
brush.fillStyle = "#39275B";
brush.strokeStyle = "#39275B"
brush.lineWidth = 3;

// //draw a rect
// brush.fillRect(30,40, 150, 250);
// brush.strokeRect(30,40, 150, 250);

// brush.fillRect(300,300,20,40);

// //draw a path
// brush.beginPath();
// brush.moveTo(100,100);
// brush.lineTo(200,300);
// brush.lineTo(50,200);
// brush.lineTo(100,200);
// brush.closePath();

// brush.fillStyle = "#39275B";
// brush.stroke();
// brush.fill();

// //circle
// brush.beginPath();
// brush.arc(300,200, 60, 0, 2*Math.PI);
// brush.fill();

var drawing = false;

canvas.addEventListener('mousedown', (event) => {
    brush.beginPath();
    //color based on input
    brush.strokeStyle = document.querySelector('input').value;
    brush.moveTo(event.offsetX, event.offsetY);
    drawing = true;
});

canvas.addEventListener('mousemove', (event) => {
    if(drawing){
        brush.lineTo(event.offsetX, event.offsetY);
        brush.stroke();     
    }
});

canvas.addEventListener('mouseup', () => { 
    drawing = false;
})


