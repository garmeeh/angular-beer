'use strict';

/*
* Beer Index Controller
*/

module.exports = function($scope, BeerFactory){

  $scope.random = function(){

    // Need to revisit this. Used to append timestamp to request url
    // so that the cahced version is not used.
    var bustCache = Date.now();

    BeerFactory
      .getBeer(bustCache)
      .then(function(res){
        $scope.beer = res.data;
        // display orgainc icon y/n
        if($scope.beer.orgainc === "Y"){
          $scope.orgainc = true;
        }
        $scope.brewery = $scope.beer.breweries[0];
    });
  };

  $scope.random();

};
