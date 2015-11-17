'use strict';

angular.module('ui-table')
.filter('startFrom', function() {
  return function (input, start) {
    start = +start;
    return input && input.slice(start);
  };
});
