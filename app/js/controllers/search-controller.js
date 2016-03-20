'use strict';

/*
* Search Controller
*/

module.exports = function($scope, $http){

  $scope.search = function(query){
    $scope.searchQuery = query;
    $http.get('https://crossorigin.me/https://api.brewerydb.com/v2/search?q='+query+'&withBreweries=Y&type=beer&key=8dde036c69009d31acb2d710b19c6e80&format=json')
    .then(function(response){
      $scope.results = response.data.data;
    });
  }

};
