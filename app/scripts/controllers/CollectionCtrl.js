(function(){
  function CollectionCtrl(Fixtures){
    this.albums = Fixtures.getCollection(12);
  //  this.albums.push(angular.copy(albumPicasso));
}
<<<<<<< HEAD
=======

>>>>>>> assignment-6
  angular
  .module('blocJams')
  .controller('CollectionCtrl', ['Fixtures',CollectionCtrl]);
})();
