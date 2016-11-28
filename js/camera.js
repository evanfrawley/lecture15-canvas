'use strict';

var video = document.querySelector('video');
var canvas = document.querySelector('#canvas');
var brush = canvas.getContext('2d');

navigator.getUserMedia = navigator.getUserMedia || 
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;

var playingStream;

//how to call
document.querySelector('#record').addEventListener('click',() =>{
    navigator.getUserMedia( {video:{mandatory: {maxWidth:300, maxHeight:300}}}, 
    function(mediaStream) {
        playingStream = mediaStream; //GLOBAL!

        video.src = window.URL.createObjectURL(mediaStream)        

    //mediaStream is of type MediaStream
    //do something with it here!
        console.log("you have the camera!");
    }, function(err) {
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
    console.log(snapshot);

    var link = document.createElement('a');
    link.href = snapshot;
    link.download = 'selfie.png';

    link.click();


});
