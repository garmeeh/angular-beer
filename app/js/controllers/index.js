'use strict';

/*
* Controllers
*/
var app = require('angular').module('RandomBeer');

app.controller('BeerIndexController', require('./beer-index-controller'));
app.controller('BreweryIndexController', require('./brewery-index-controller'));
