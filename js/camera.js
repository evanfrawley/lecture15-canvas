'use strict';

var localMediaStream;
var video = document.querySelector('video');

//access the camera
navigator.getUserMedia = navigator.getUserMedia || 
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia; //will use whichever available!

//record button
document.querySelector('#record').addEventListener('click', function(){
  navigator.getUserMedia({video:{mandatory:{maxWidth:300, maxHeight:300}}}, function(mediaStream) {
    localMediaStream = mediaStream;

    video.src = window.URL.createObjectURL(mediaStream);

  }, function(err) {
    console.log(err);
  }); 
});

//stop the stream
document.querySelector('#stop').addEventListener('click', function() {
  video.pause();

  //get all tracks from the stream
  var tracks = localMediaStream.getTracks();
  tracks.forEach(function(track){
    track.stop(); //stop each track
  });
});

//draw image on canvas
document.querySelector('#selfie').addEventListener('click', function() {
  // document.querySelector('#stop').click(); //click stop button to pause things
  canvas.width = video.clientWidth;
  canvas.height = video.clientHeight;

  brush.drawImage(video, 0,0);

  drawWithMouse(brush); //call previous method
});

//save selfie to file!
document.querySelector('#save').addEventListener('click', function() {
  var snapshot = canvas.toDataURL('image/png'); //convert to png
 
  var link = document.createElement('a'); //create a fake link
  link.href = snapshot;
  link.download = 'selfie.png'; //make it a downlod link

  link.click(); //click the link!
});
