'use strict';

navigator.getUserMedia = navigator.getUserMedia || 
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;
//navigator.getUserMedia(); //will use whichever available!

var video = document.querySelector('video');
var canvas = document.querySelector('#canvas');
var brush = canvas.getContext('2d');
var playingStream;

document.querySelector('#record').addEventListener('click', () => {
    navigator.getUserMedia({video:{mandatory: {maxWidth:300, maxHeight:300}}}, 
    function(mediaStream) {
        playingStream = mediaStream; //save for later

        //set the src to be the stream
        video.src = window.URL.createObjectURL(mediaStream)
    

    }, function(err){ 
        console.log(err); 
    });
})

document.querySelector('#stop').addEventListener('click', () => {
    video.pause();
    var tracks = playingStream.getTracks();
    tracks.forEach(function(track){
        track.stop(); //stop each track
    });
});

document.querySelector('#capture').addEventListener('click', () => {
    if(playingStream){
        canvas.width = video.clientWidth; //note `clientWidth`
        canvas.height = video.clientHeight;        

        //draw the video on the canvas as an image!
        brush.drawImage(video,0,0);        
    }
});

document.querySelector('#save').addEventListener('click', () => {
    var snapshot = canvas.toDataURL('image/png');

    var link = document.createElement('a');
    link.href = snapshot;
    link.download = 'selfie-b.png';
    link.click();
});
