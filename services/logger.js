angular.module('ui-leaflet').service('leafletLogger', 
/** @ngInject */
function(nemSimpleLogger) {
  return nemSimpleLogger.spawn();
});
