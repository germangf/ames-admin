angular.module('ames-admin')
.controller('EventsListCtrl', ['$scope', '$state', 'resolveData', 'events', 'masterdata',
  function($scope, $state, resolveData, events, masterdata) {

  // data for select widgets
  $scope.sections = masterdata.getData('sections');

  // events data
  $scope.event = {};
  getEventsInfo($scope, masterdata, resolveData.data);

  $scope.filterData = {};
  $scope.showFilterContainer = false;

  // table
  $scope.selected = [];

  $scope.query = {
    order: 'creationDate',
    limit: 10,
    page: 1
  };

  $scope.onOrderChange = function (order) {
    events.filter($scope.query).success(function(result) {
      getEventsInfo($scope, masterdata, result);
    });
  };

  $scope.onPaginationChange = function (page, limit) {
    events.filter($scope.query).success(function(result) {
      getEventsInfo($scope, masterdata, result);
    });
  };

  $scope.showFilter = function() {
    $scope.showFilterContainer = !$scope.showFilterContainer;
  };

  $scope.filter = function() {
    events.filter($scope.filterData).success(function(result) {
      getEventsInfo($scope, masterdata, result);
    });
  };

}]);

function getEventsInfo($scope, masterdata, result) {
  $scope.events = result.docs;
  $scope.eventsTotal = result.total;
  angular.forEach($scope.events, function(value, key) {
    if (value.section) {
      value.sectionDescription = masterdata.getDescription(value.section, 'sections');
    }
    if (value.type) {
      value.typeDescription = masterdata.getDescription(value.type, 'eventTypes');
    }
  });
}
