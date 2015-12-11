'use strict';

angular.module('ames-admin')
.controller('EventDetailCtrl', ['$scope', '$state', 'events', 'moment', 'masterdata', 'resultData',
  function($scope, $state, events, moment, masterdata, resultData) {

  $scope.sections = masterdata.getData('sections');
  $scope.eventTypes = masterdata.getData('eventTypes');

  $scope.event = resultData ? resultData.data[0] : {};
  $scope.event.dateUI = resultData ? moment($scope.event.date).format('DD.MM.YYYY') : '';

  $scope.save = function() {
    $scope.event.date = moment($scope.event.dateUI, 'DD.MM.YYYY').toDate();
    events.save($scope.event);
    $state.go('event.list');
  };

  $scope.update = function() {
    $scope.event.date = moment($scope.event.dateUI, 'DD.MM.YYYY').toDate();
    events.update($scope.event);
    $state.go('event.list');
  };

  $scope.remove = function() {
    events.remove($scope.event);
    $state.go('event.list');
  };

}]);
