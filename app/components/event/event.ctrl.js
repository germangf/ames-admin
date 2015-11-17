'use strict';

angular.module('ames-admin')
.controller('EventCtrl', ['$scope', 'events', function($scope, events) {

  $scope.addMember = function() {
    $scope.events.push($scope.event);
    $scope.event = {};
  };

}]);
