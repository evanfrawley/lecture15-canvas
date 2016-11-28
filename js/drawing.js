'use strict';

var canvas = document.querySelector('#canvas');
var brush = canvas.getContext('2d');

var lastLocation = undefined;
canvas.addEventListener('mousedown', function(event){
    var input = document.querySelector('input');
    brush.strokeStyle = input.value;
    brush.beginPath();
    brush.moveTo(event.offsetX, event.offsetY);
    //brush.arc(event.offsetX, event.offsetY, 3, 0, 2*Math.PI);
    //brush.fill();
    lastLocation = {x:event.offsetX, y:event.offsetY};
});

canvas.addEventListener('mousemove', function(event){
    if(lastLocation){
        brush.lineTo(event.offsetX, event.offsetY);
        brush.stroke();
    }
});

canvas.addEventListener('mouseup', function() {
    lastLocation = undefined; //no longer pressing
})

