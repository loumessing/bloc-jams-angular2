(function(){
  function SongPlayer() {
    var SongPlayer = {};

/**
* @desc active song playing
* @type {object}
*/
    SongPlayer.currentSong = null;
    var currentBuzzObject = null;
/**
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/

var setSong = function(song) {
    if (currentBuzzObject) {
       currentBuzzObject.stop();
       SongPlayer.currentSong.playing = null;
   }

/**
* @desc Buzz object audio file
* @type {object}
*/

   currentBuzzObject = new buzz.sound(song.audioUrl, {
       formats: ['mp3'],
       preload: true
   });

/**
* @function playSong
* @desc play current/new song
* @param {object} song
*/

var playSong = function(song) {
  currentBuzzObject.play();
  song.playing = true;
};

SongPlayer.currentSong = song;
};

/**
* @function playSong
* @desc play current/new song
* @param {object} song
*/

  SongPlayer.play = function(song) {
    song = song || SongPlayer.currentSong;
    if (SongPlayer.currentSong !== song) {
      setSong(song);
      playSong(song);
      currentBuzzObject.play();
      song.playing = true;
    } else if (SongPlayer.currentSong === song) {
      if (currentBuzzObject.isPaused()) {
        playSong(song);
        }
      }
    };

/**
* @function pause song
* @desc pause song
* @param {object} song
*/

    SongPlayer.pause = function(song) {
      song =  song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
