'use strict';

angular.module('ames-admin')
.controller('MembersListCtrl', ['$scope', '$state', 'resolveData', 'members', 'masterdata',
  function($scope, $state, resolveData, members, masterdata) {

  // data for select widgets
  $scope.sections = masterdata.getData('sections');
  $scope.memberStatus = masterdata.getData('memberStatus');
  $scope.quotePendings = masterdata.getData('quotePending');

  // members data
  $scope.member = {};
  $scope.members = resolveData.data.members;
  $scope.count = resolveData.data.count;
  setDescriptions($scope, masterdata);

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
    members.filter(mergeFilters($scope)).success(function(result) {
      $scope.members = result.members;
      $scope.count = result.count;
      setDescriptions($scope, masterdata);
    });
  };

  $scope.onPaginationChange = function (page, limit) {
    members.filter(mergeFilters($scope)).success(function(result) {
      $scope.members = result.members;
      $scope.count = result.count;
      setDescriptions($scope, masterdata);
    });
  };

  $scope.showFilter = function() {
    $scope.showFilterContainer = !$scope.showFilterContainer;
  };

  $scope.filter = function() {
    $scope.query.page = 1;
    members.filter(mergeFilters($scope)).success(function(result) {
      $scope.members = result.members;
      $scope.count = result.count;
      setDescriptions($scope, masterdata);
    });
  };
}]);

function mergeFilters($scope) {
  var merged = {};
  angular.merge(merged, $scope.filterData);
  angular.merge(merged, $scope.query);
  return merged;
}

function setDescriptions($scope, masterdata) {
  angular.forEach($scope.members, function(value, key) {
    if (value.ames && value.ames.section) {
      value.ames.sectionDescription = masterdata.getDescription(value.ames.section, 'sections');
    }
  });
}
