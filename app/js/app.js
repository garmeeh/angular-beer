'use strict';

/*
* Main App JS
*/

  var angular = require('angular');
  require('angular-ui-router');

  var app = angular.module('RandomBeer', ['ui.router']);

  require('./services');
  require('./controllers');

  /*
  * Routes
  */
  app.config(function($stateProvider, $urlRouterProvider){

    // Set defautl route
    $urlRouterProvider.otherwise("/beer");

    $stateProvider
      .state('app',{
        url: '',
        abstract: true,
        templateUrl: 'index.html'
      })
      .state('app.beer',{
        url: '/beer',
        views: {
          '@':{
            templateUrl: 'templates/pages/beer.html',
            controller: 'BeerIndexController'
          }
        }
      })
      .state('app.brewery',{
        url: "/brewery/:breweryId",
        views: {
          '@':{
            templateUrl: 'templates/pages/brewery.html',
            controller: 'BreweryIndexController'
          }
        }
      });
  });
