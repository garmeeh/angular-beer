'use strict';

/*
* Beer BeerFactory
*/

module.exports = function($http, $q){
    return {
      getBrewery: function(breweryId){
        var defer = $q.defer();
        $http.get('https://crossorigin.me/https://api.brewerydb.com/v2/brewery/'+ breweryId +'?withBreweries=Y&hasLabels=Y&key=8dde036c69009d31acb2d710b19c6e80&format=json')
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function () {
          defer.reject("Error: BreweryFactory");
        });
        return defer.promise;
      }
    }
};
