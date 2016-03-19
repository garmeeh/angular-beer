'use strict';

/*
* Services
*/
var app = require('angular').module('RandomBeer');

app.factory('BeerFactory', require('./beer-factory'));
app.factory('BreweryFactory', require('./brewery-factory')); 
