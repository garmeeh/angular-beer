'use strict';

/*
* Brewery Index Controller
*/

module.exports = function($scope, $stateParams, BreweryFactory){

  $scope.getBrewery = function(){
    BreweryFactory
      .getBrewery($stateParams.breweryId)
      .then(function(res){
        $scope.brewery = res.data;
        console.log($scope.brewery);
    });
  };
  $scope.getBrewery();
};
