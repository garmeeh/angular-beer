'use strict';

/*
* BeerFactory
*/

module.exports = function($http, $q){

    return {
      getBeer: function(bustCache){
        var defer = $q.defer();
        // Use chrome flags for now: open -a Google\ Chrome --args --disable-web-security --user-data-dir
        // Add back in once crossorigin.me is back up
        // http://crossorigin.me/http://api.brewerydb.com/v2/beer/random?withBreweries=Y&hasLabels=Y&key=8dde036c69009d31acb2d710b19c6e80&format=json
        $http.get('http://api.brewerydb.com/v2/beer/random?withBreweries=Y&hasLabels=Y&key=8dde036c69009d31acb2d710b19c6e80&format=json?' + bustCache)
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function () {
          defer.reject("Error: BeerFactory");
        });

        return defer.promise;
      }
    }

};
