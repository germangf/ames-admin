angular.module('ames-admin')
.controller('EventListCtrl', ['$scope', '$state', 'events', 'resultData', function($scope, $state, events, resultData) {

  $scope.event = {};
  $scope.events = resultData.data;

  $scope.filterData = {};
  $scope.showFilterContainer = false;
  $scope.showFilter = function() {
    $scope.showFilterContainer = !$scope.showFilterContainer;
  };

  $scope.filter = function() {
    events.filter($scope.filterData).success(function(result) {
      $scope.events = result;
    });
  };

  $scope.showEvent = function(id) {
    events.findOne(id, function(data) {
      $state.go('event.detail');
    });
  };

  $scope.sections = [
    { code: 'BS', description: 'Basilea' },
    { code: 'BE', description: 'Berna' },
    { code: 'GE', description: 'Ginebra' },
    { code: 'LS', description: 'Lausana' },
    { code: 'ZH', description: 'Zurich' }];

  $scope.headers = [
    { name:'Tipo', field: 'type' },
    { name: 'Nombre', field: 'name' },
    { name: 'Sección', field: 'section' },
    { name: 'Lugar', field: 'location' },
    { name: 'Fecha', field: 'date' }
  ];

  $scope.custom = {type: 'grey', name:'blod', section: 'grey', location: 'grey', date: 'grey'};
  $scope.sortable = ['type', 'name', 'section', 'location', 'date'];
  $scope.thumbs = 'thumb';
  $scope.count = 2;

}]);
