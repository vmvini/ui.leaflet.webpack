var L = require('leaflet.markercluster.webpack');

require('angular-simple-logger');

var bounds = require('./directives/bounds.js');
var center = require('./directives/center.js');
var controls = require('./directives/controls.js');
var decorations = require('./directives/decorations.js');
var eventBroadcast = require('./directives/eventBroadcast.js');
var geojson = require('./directives/geojson.js');
var layercontrol = require('./directives/layercontrol.js');
var layers = require('./directives/layers.js');
var leaflet = require('./directives/leaflet.js');
var legend = require('./directives/legend.js');
var markers = require('./directives/markers.js');
var maxbounds = require('./directives/maxbounds.js');
var paths = require('./directives/paths.js');
var tiles = require('./directives/tiles.js');
var watchOptions = require('./directives/watchOptions.js');




module.exports = angular
                    .module('ui-leaflet', ['nemLogging'])
                    .value('L', L)
                    .directive('bounds', bounds)
                    .directive('controls', controls)
                    .directive('decorations', decorations)
                    .directive('eventBroadcast', eventBroadcast)
                    .directive('geojson', geojson)
                    .directive('layercontrol', layercontrol)
                    .directive('layers', layers)
                    .directive('leaflet', leaflet)
                    .directive('markers', markers)
                    .directive('maxbounds', maxbounds)
                    .directive('paths', paths)
                    .directive('tiles', tiles)
                    .directive('watchOptions', watchOptions)
                    
center.centerDirectiveTypes.forEach(function(dirType){
  angular.module('ui-leaflet').directive(dirType, center.centerDirectives[dirType]);
});



require('./services/events/leafletEventsHelpers.js');
require('./services/events/leafletGeoJsonEvents.js');
require('./services/events/leafletLabelEvents.js');
require('./services/events/leafletMapEvents.js');
require('./services/events/leafletMarkerEvents.js');
require('./services/events/leafletPathEvents.js');

require('./services/eventManager.js');
require('./services/leafletBoundsHelpers.js');
require('./services/leafletControlHelpers.js');
require('./services/leafletData.js');
require('./services/leafletDirectiveControlsHelpers.js');
require('./services/leafletGeoJsonHelpers.js');
require('./services/leafletHelpers.js');
require('./services/leafletIterators.js');
require('./services/leafletLayerHelpers.js');
require('./services/leafletLegendHelpers.js');
require('./services/leafletMapDefaults.js');
require('./services/leafletMarkersHelpers.js');
require('./services/leafletPathsHelpers.js');
require('./services/leafletWatchHelpers.js');
require('./services/logger.js');
require('./services/nominatim.js');