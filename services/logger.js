angular.module('ui-leaflet').service('leafletLogger', 
/** @ngInject */
['nemSimpleLogger', function(nemSimpleLogger) {
  return nemSimpleLogger.spawn();
}]);
