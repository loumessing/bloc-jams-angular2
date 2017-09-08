(function(){
/**private*/
  /**
  * @function SongPlayer
  * @desc plays/pauses songs
  * @param Fixtures
  * @returns {Object} SongPlayer
  */

function SongPlayer(Fixtures) {
  /**
  * @desc creates empty SongPlayer
  * @type {Object}
  */

var SongPlayer = {};

/**
* @desc Current Album info
* @type {Object}
*/
/**private
*/

var currentAlbum = Fixtures.getAlbum();

/**
* @desc Buzz audio file
* @type {Object}
*/

var currentBuzzObject = null;

/**
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/

var setSong = function(song) {
    if (currentBuzzObject) {
       stopSong();
   }

/**
* @desc Buzz object audio file
* @type {object}
*/

   currentBuzzObject = new buzz.sound(song.audioUrl, {
       formats: ['mp3'],
       preload: true
   });

   SongPlayer.currentSong = song;
 };

/**
* @function playSong
* @desc play current/new song
* @param {object} song
*/

var playSong = function(song) {
  currentBuzzObject.play();
  song.playing = true;
};

/**
* @function pauseSong
* @desc pauses current/new song and sets song.playing to false and changes 'play/pause' icon
* @param {object} song
*/

var pauseSong = function(song) {
  currentBuzzObject.pause();
  song.playing = false;
};


/**
* @function stopSong
* @desc stop current/new song
* @param {object} song
*/
var stopSong = function(song) {
  currentBuzzObject.stop();
  SongPlayer.currentSong.playing = null;
};

/**
* @function getSongIndex
* @desc get name/index of song
* @param {Object} song
* @return {Number}
*/

var getSongIndex = function(song) {
  return currentAlbum.songs.indexOf(song);
};

/** public */
/**
* @desc: current song from list of songs
* @type {Object}
*/

SongPlayer.currentSong = null;

/**
* @function SongPlayer.play(song)
* @desc play current/new song from beginning
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
    * @function SongPlayer.pause
    * @desc pause song
    * @param {object} song
    */

    SongPlayer.pause = function(song) {
          song =  song || SongPlayer.currentSong;
          currentBuzzObject.pause();
          song.playing = false;
        };


/**
* @function SongPlayer.previous
* @desc move to previous song
*/

SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex--;

      if (currentSongIndex < 0) {
        stopSong();
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

    /**
    * @function SongPlayer.next
    * @desc move to next song
    */

    SongPlayer.next = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex++;

      if (currentSongIndex >= currentAlbum.songs.length) {
        stopSong();
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
