UI-Leaflet.webpack
=====================

UI-Leaflet (https://github.com/angular-ui/ui-leaflet) and Leaflet markercluster (https://github.com/Leaflet/Leaflet.markercluster) structured with webpack.


### Install

Install with npm: `npm install --save ui.leaflet.webpack`

### Usage

```javascript
require('ui.leaflet.webpack');

angular.module('YourModule', ['ui-leaflet']);
```

### Notes
This module already requires Leaflet and Leaflet MarkerCluster plugin, so don't require them again. 

Also, the Leaflet global object 'L' is exposed through an angular value 'L':

```javascript
angular.module('example', ['ui-leaflet'])
        .service('MyService', function(L){
            // L is the Leaflet global object. (Not global anymore :)
        });
```

### Build Notes
This module has some files written with ES6, so you need a babel loader to build.

Install the babel-loader
```bash
npm install babel-loader babel-core babel-preset-es2015 webpack --save-dev
```

Add this loader into your webpack.config file
```javascript
{
    test: /\.js$/,
    exclude: /(node_modules(?!\/ui.leaflet.webpack)|bower_components)/,
    loader: 'babel-loader?presets[]=es2015'
},
```