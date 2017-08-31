(function(){
  function AlbumCtrl(Fixtures){
  this.albumData = Fixtures.getAlbum();
  }
<<<<<<< HEAD
=======

>>>>>>> assignment-6
angular
  .module('blocJams')
  .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
