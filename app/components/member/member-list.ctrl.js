'use strict';

angular.module('ames-admin')
.controller('MemberListCtrl', ['$scope', '$state', 'members', 'resultData', function($scope, $state, members, resultData) {
	$scope.member = {};
  $scope.members = resultData.data;

  $scope.filterData = {};

  $scope.filter = function() {
    members.filter($scope.filterData);
  };

  $scope.sections = [
    { code: 'BS', description: 'Basilea' },
    { code: 'BE', description: 'Berna' },
    { code: 'GE', description: 'Ginebra' },
    { code: 'LS', description: 'Lausana' },
    { code: 'ZH', description: 'Zurich' }];


  $scope.years = getYears();

  $scope.headers = [
    { name: 'Nombre', field: 'name' },
    { name:'Email', field: 'email' },
    { name: 'Telefono', field: 'phone' },
    { name: 'Seccion', field: 'section' }
  ];

  $scope.custom = {name: 'bold', email:'grey', phone: 'grey', section: 'gray'};
  $scope.sortable = ['name', 'email', 'section'];
  $scope.thumbs = 'thumb';
  $scope.count = 3;

  $scope.showMember = function(id) {
    console.log(id);
    members.findOne(id, function(data) {
      console.log('go');
      $state.go('member.detail');
    });
  };

}]);


function getYears() {
  var years = [];
  var currentYear = new Date().getFullYear();
  for (var year = 2000; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
}
