//Constructor
function Radio(audioPlayer) {
  this.currentTime = 0;
  this.intervalId = 0;
  this.songs = ['u2.mp3','mumford.mp3','celtas.mp3','bisbal.mp3'];
  this.audioPlayer = audioPlayer;
  this.songSelected = this.shuffleSong();
  

  this.audioPlayer.src = 'songs/' + this.songSelected;

}



// cambia de cancion cada 10 segundos
Radio.prototype.startClick = function () {
  var self = this;
  self.audioPlayer.play();
  self.intervalId = setInterval(function(){
  
  self.songSelected = self.shuffleSong();  
  self.audioPlayer.src = 'songs/' + self.songSelected ;
  self.audioPlayer.play()
  
    
  },15000);
};


//Para la función del click
Radio.prototype.stopClick = function () {
  var self = this;
  self.audioPlayer.pause();

  //clearInterval(self.intervalId);
};

//Reset songs
Radio.prototype.resetClick = function () {
  this.currentTime = 0;
};


// shuffle songs

Radio.prototype.shuffleSong = function () {
  if (this.songs.length === 0) {
    return;
  }
  var randomSongIndex = randomNumber(this.songs);
  var songRandom = this.songs[randomSongIndex];
  this.songs.splice(randomSongIndex,1);
  return songRandom;
}

/*
  var shuffleSong = [];


function playMusic(array, index) {
  console.log(array[index])
  
  console.log(array);
}
  
playMusic(shuffleSong, randomNumber(shuffleSong
*/
function randomNumber(array) {
  return Math.floor(Math.random()*(array.length));
}

