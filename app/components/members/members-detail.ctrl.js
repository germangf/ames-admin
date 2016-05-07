'use strict';

angular.module('ames-admin')
.controller('MembersDetailCtrl', ['$scope', '$state', 'members', 'resolveData', 'masterdata',
  function($scope, $state, members, resolveData, masterdata) {

  $scope.cantons = masterdata.getData('cantons');
  $scope.memberHows = masterdata.getData('memberHows');
  $scope.sections = masterdata.getData('sections');
  $scope.maritalStatus = masterdata.getData('maritalStatus');
  $scope.nationalities = masterdata.getData('nationalities');
  $scope.educationLevels = masterdata.getData('educationLevels');

  $scope.member = resolveData ? resolveData.data[0] : {};
  $scope.member.birthday = $scope.member.birthday && new Date($scope.member.birthday);
  $scope.member.inSwitzerlandSince = $scope.member.inSwitzerlandSince && new Date($scope.member.inSwitzerlandSince);
  $scope.member.startDate = $scope.member.startDate && new Date($scope.member.startDate);

  $scope.dateOptions = {
    startingDay: 1
  };

  $scope.popupBirthday = {
    opened: false
  };

  $scope.openBirthday = function() {
    $scope.popupBirthday.opened = true;
  };

  $scope.popupInSwitzerland = {
    opened: false
  };

  $scope.openInSwitzerland = function() {
    $scope.popupInSwitzerland.opened = true;
  };

  $scope.save = function() {
    members.save($scope.member);
    $state.go('members.inactive');
  };

  $scope.update = function() {
    members.update($scope.member);
    $state.go('members.inactive');
  };

  $scope.delete = function() {
    members.delete($scope.member);
    $state.go('members.inactive');
  };

}]);
