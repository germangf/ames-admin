'use strict';

angular.module('ames-admin')
.controller('MemberListCtrl', ['$scope', '$state', 'members', 'resultData', function($scope, $state, members, resultData) {
	$scope.member = {};
  $scope.members = resultData.data;

  $scope.filterData = {};
  $scope.showFilterContainer = false;
  $scope.showFilter = function() {
    $scope.showFilterContainer = !$scope.showFilterContainer;
  };

  $scope.filter = function() {
    members.filter($scope.filterData).success(function(result) {
      $scope.members = result;
    });
  };

  $scope.showMember = function(id) {
    members.findOne(id, function(data) {
      $state.go('member.detail');
    });
  };

  $scope.sections = [
    { code: 'BS', description: 'Basilea' },
    { code: 'BE', description: 'Berna' },
    { code: 'GE', description: 'Ginebra' },
    { code: 'LS', description: 'Lausana' },
    { code: 'ZH', description: 'Zurich' }];

  $scope.statuses = [
    { code: 'ALL', description: 'Todas' },
    { code: 'ACT', description: 'En activo' },
    { code: 'REM', description: 'Dadas de baja' }];


  $scope.years = getYears();

  $scope.headers = [
    { name: 'Nombre', field: 'name' },
    { name:'Email', field: 'email' },
    { name: 'Telefono', field: 'phone' },
    { name: 'Seccion', field: 'section' },
    { name: 'Cuota pago', field: 'quote' }
  ];

  $scope.custom = {name: 'bold', email:'grey', phone: 'grey', section: 'grey', quote: 'grey'};
  $scope.sortable = ['name', 'email', 'section', 'quote'];
  $scope.thumbs = 'thumb';
  $scope.count = 2;

}]);


function getYears() {
  var years = [];
  var currentYear = new Date().getFullYear();
  for (var year = 2000; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
}
