'use strict';

angular.module('ames-admin')
.controller('MembersDetailCtrl', ['$scope', '$state', 'resolveData', 'members', 'moment', 'masterdata',
  function($scope, $state, members, resolveData, moment, masterdata) {

  $scope.cantons = masterdata.getData('cantons');
  $scope.memberHows = masterdata.getData('memberHows');
  $scope.sections = masterdata.getData('sections');
  $scope.maritalStatus = masterdata.getData('maritalStatus');
  $scope.nationalities = masterdata.getData('nationalities');
  $scope.educationLevels = masterdata.getData('educationLevels');

  $scope.member = resolveData.data;
  /*
  resolveData.members.success(function(data) {
    $scope.member = data;
    console.log($scope.member);
  });
  */

  $scope.save = function() {
    $scope.member.birthday = moment($scope.event.birthdayUI, 'DD.MM.YYYY').toDate();
    members.save($scope.member);
    $state.go('member.list');
  };

  $scope.update = function() {
    $scope.member.birthday = moment($scope.event.birthdayUI, 'DD.MM.YYYY').toDate();
    members.update($scope.member);
    $state.go('member.list');
  };

  $scope.remove = function() {
    members.remove($scope.member);
    $state.go('member.list');
  };

}]);
