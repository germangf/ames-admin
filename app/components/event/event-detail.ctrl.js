'use strict';

angular.module('ames-admin')
.controller('EventDetailCtrl', ['$scope', '$state', 'events', 'resultData', 'moment', function($scope, $state, events, resultData, moment) {

  $scope.event = resultData ? resultData.data[0] : {};

  //$scope.eventDate
  $scope.save = function() {
    $scope.event.date = moment($scope.eventDate, 'DD.MM.YYYY').toDate();
    events.save($scope.event);
    $state.go('event.list');
  };

  $scope.update = function() {
    events.update($scope.event);
    $state.go('event.list');
  };

  $scope.remove = function() {
    events.remove($scope.event);
    $state.go('event.list');
  };

  $scope.sections = [
    { code: 'BS', description: 'Basilea' },
    { code: 'BE', description: 'Berna' },
    { code: 'GE', description: 'Ginebra' },
    { code: 'LS', description: 'Lausana' },
    { code: 'ZH', description: 'Zurich' }];

  $scope.types = [
    { code: 'A', description: 'Actividad' },
    { code: 'T', description: 'Taller' }];

}]);
