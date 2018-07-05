
var playSong = document.querySelector('.play-song');
var keepSong = document.querySelector('.keep-song');
var audioPlayer = document.querySelector('audio');

var radio = new Radio(audioPlayer);


// Start/Stop Button
playSong.addEventListener('click', function () {
  radio.startClick();

  

  playSong.classList.toggle("play-song");
  playSong.classList.toggle("stop");

  if (playSong.classList.contains("play-song")) {
    playSong.innerText = "play-song";
    playSong.style.background="blue";
    
    
  } else {
      playSong.innerText = "STOP";
      playSong.style.background="red";
      console.log(playSong);
      radio.stopClick();
      
      
      //})
      
      
      
      };
  }); 


 /*function setStartBtn() {

    playSong.innerText = 'START';
    playSong.className = 'play-song';
 }

 function setStopBtn() {
  
    playSong.innerText = 'STOP';
    playSong.className = 'stop';
 }

 
 // Start/Stop Button
playSong.addEventListener('click', function () {

 var intervalID = 0;

if (playSSong.innerText === 'START') {
  setStopBtn();
  setSplitBtn();
  radio.startClick();
   
} else {
  setStartBtn();
  setResetBtn();
  radio.stopClick();
  clearInterval(self.intervalID);
}/*
 


//reset

*/

