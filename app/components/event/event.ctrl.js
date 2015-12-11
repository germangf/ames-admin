'use strict';

angular.module('ames-admin')
.controller('EventListCtrl', ['$scope', '$state', 'resultData', 'events', 'moment', 'masterdata', 'NgTableParams',
  function($scope, $state, resultData, events, moment, masterdata, NgTableParams) {

  // data for select widgets
  $scope.sections = masterdata.getData('sections');
  $scope.eventTypes = masterdata.getData('eventTypes');

  // members data
  $scope.event = {};
  $scope.events = resultData.data;
  angular.forEach($scope.events, function(value, key) {
    value.typeUI = masterdata.getDescription(value.type, 'eventTypes');
    value.sectionUI = masterdata.getDescription(value.section, 'sections');
    value.dateUI = moment(value.date).format('DD.MM.YYYY');
  });

  $scope.filterData = {};
  $scope.showFilterContainer = false;

  // table items
  $scope.itemsByPage = 2;

  $scope.showFilter = function() {
    $scope.showFilterContainer = !$scope.showFilterContainer;
  };

  $scope.filter = function() {
    events.filter($scope.filterData).success(function(result) {
      $scope.events = result;
    });
  };

  $scope.addMember = function() {
    $scope.events.push($scope.event);
    $scope.event = {};
  };

}]);
