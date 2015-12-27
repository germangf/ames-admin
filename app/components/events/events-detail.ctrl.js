'use strict';

angular.module('ames-admin')
.controller('EventsDetailCtrl', ['$scope', '$state', '$mdDatePicker', 'events', 'moment', 'masterdata', 'resultData',
  function($scope, $state, $mdDatePicker, events, moment, masterdata, resultData) {

  $scope.sections = masterdata.getData('sections');
  $scope.eventTypes = masterdata.getData('eventTypes');

  $scope.event = resultData ? resultData.data[0] : {};
  $scope.event.date = moment($scope.event.date).toDate();

 $scope.showPicker = function(event, ngModel) {
    $scope.event = $scope.event || {};
    $mdDatePicker(event, $scope.event[ngModel])
      .then(function(selectedDate) {
        $scope.event[ngModel] = selectedDate;
      });
  };

  $scope.save = function() {
    events.save($scope.event);
    $state.go('events.list');
  };

  $scope.update = function() {
    events.update($scope.event);
    $state.go('events.list');
  };

  $scope.remove = function() {
    events.remove($scope.event);
    $state.go('events.list');
  };

}]);
