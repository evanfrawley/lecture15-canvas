'use strict';

var canvas = document.querySelector('#canvas');
var brush = canvas.getContext('2d');

//draw a face with the brush
function drawFace(brush) {
  //head
  brush.fillStyle = 'yellow';
  brush.fillRect(150,100,300,300);
  brush.fillRect(210,50,180,50);

  //eyes
  brush.fillStyle = 'blue';
  brush.beginPath();
  brush.arc(225,175, 30, 0,2*Math.PI);
  brush.fill();

  brush.beginPath();
  brush.arc(375,175, 30, 0,2*Math.PI);
  brush.fill();

  //mouth
  brush.strokeStyle = 'red';
  brush.lineWidth = 15;
  brush.beginPath();
  brush.arc(300,260, 100, .1*Math.PI, .9*Math.PI)
  brush.stroke();
}

function drawWithMouse(brush) {
  brush.fillStyle = "#39275B";
  brush.strokeStyle = "#C79900"
  brush.lineWidth = 3;

  var lastPoint = undefined; //also tracks if pressed
  canvas.addEventListener('mousedown', function(event){
    //select an input color
    var input = document.querySelector('#picker');
    brush.strokeStyle = input.value;

    lastPoint = {x: event.offsetX, y: event.offsetY}

    brush.beginPath();
    brush.moveTo(event.offsetX,event.offsetY);
    // brush.arc(x,y,5,0,2*Math.PI);
    brush.stroke();
  });

  canvas.addEventListener('mousemove', function(event){
    if(lastPoint){ //if we have a last point
      // brush.beginPath();
      // brush.arc(event.offsetX,event.offsetY,5,0,2*Math.PI);
      // brush.fill();
      brush.lineTo(event.offsetX, event.offsetY);
      brush.stroke();
      lastPoint.x = event.offsetX;
      lastPoint.y = event.offsetY;
    }
  });

  canvas.addEventListener('mouseup',function(event){
    lastPoint = undefined;
  })
}

//drawFace(brush);
drawWithMouse(brush);
