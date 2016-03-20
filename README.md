# Random Beer App

This project communicates with the [BreweryDB](http://brewerydb.com/) api. It is built with angularJS and is leveraging [Foundation's](http://foundation.zurb.com/sites/docs/) flex grid for layout.

###  Current Functionality
  - Get a random beer
  - View the Brewery details of that beer
  - Search function that searches for beers. Only beers with Brewery details will be returned

### Installation

```sh
$ git clone https://github.com/garmeeh/angular-beer.git angular-beer
$ cd angular-beer
$ npm install
$ gulp serve
```

To develop and use live reload use this in place of gulp serve:
```sh
$ gulp watch
```

### Demo

Or to just demo the app I have left in the compiled JS and CSS for now.

```sh
$ git clone https://github.com/garmeeh/angular-beer.git angular-beer
$ cd angular-beer/dist
$ python -m SimpleHTTPServer 8000
$ Go to localhost:8000 in your browser
```

License
----

MIT
