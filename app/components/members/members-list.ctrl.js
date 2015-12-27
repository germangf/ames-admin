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
  getMembersInfo($scope, masterdata, resolveData.data);

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
    members.filter($scope.query).success(function(result) {
      getMembersInfo($scope, masterdata, result);
    });
  };

  $scope.onPaginationChange = function (page, limit) {
    members.filter($scope.query).success(function(result) {
      getMembersInfo($scope, masterdata, result);
    });
  };

  $scope.showFilter = function() {
    $scope.showFilterContainer = !$scope.showFilterContainer;
  };

  $scope.filter = function() {
    members.filter($scope.filterData).success(function(result) {
      getMembersInfo($scope, masterdata, result);
    });
  };

/*
  $scope.addMember = function() {
    $scope.showList = false;
  };
*/

}]);

function getMembersInfo($scope, masterdata, result) {
  $scope.members = result.docs;
  //console.log($scope.members);
  $scope.membersTotal = result.total;
  angular.forEach($scope.members, function(value, key) {
    if (value.ames && value.ames.section) {
      value.ames.sectionDescription = masterdata.getDescription(value.ames.section, 'sections');
    }
  });
}
