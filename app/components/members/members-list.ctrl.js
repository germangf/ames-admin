'use strict';

angular.module('ames-admin')
.controller('MembersListCtrl', ['$scope', '$state', 'resolveData', 'members', 'masterdata',
  function($scope, $state, resolveData, members, masterdata) {

  // data for select widgets
  $scope.sections = masterdata.getData('sections');
  $scope.memberStatus = masterdata.getData('memberStatus');

  // members data
  $scope.member = {};
  $scope.members = resolveData.data;
  angular.forEach($scope.members, function(value, key) {
    value.ames.sectionDescription = masterdata.getDescription(value.ames.section, 'sections');
  });
  /*
  resolveData.members.success(function(data) {
    $scope.members = data;
    angular.forEach($scope.members, function(value, key) {
      value.ames.sectionDescription = masterdata.getDescription(value.ames.section, 'sections');
  });
  */

  $scope.filterData = {};
  $scope.showFilterContainer = false;

  // table items
  $scope.itemsByPage=2;
  // table
  $scope.selected = [];

  $scope.query = {
    filter: '',
    order: 'name',
    limit: 5,
    page: 1
  };


  $scope.showFilter = function() {
    $scope.showFilterContainer = !$scope.showFilterContainer;
  };

  $scope.filter = function() {
    members.filter($scope.filterData).success(function(result) {
      $scope.members = result;
    });
  };

  $scope.addMember = function() {
    $scope.showList = false;
    /*
    $scope.members.push($scope.member);
    $scope.member = {};
    */
  };

}]);
