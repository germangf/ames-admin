'use strict';

angular.module('ames-admin')
.controller('MemberDetailCtrl', ['$scope', '$state', 'members', 'moment', 'masterdata', 'resultData',
  function($scope, $state, members, moment, masterdata, resultData) {

  $scope.cantons = masterdata.getData('cantons');
  $scope.memberHows = masterdata.getData('memberHows');
  $scope.sections = masterdata.getData('sections');
  $scope.maritalStatus = masterdata.getData('maritalStatus');
  $scope.nationalities = masterdata.getData('nationalities');
  $scope.educationLevels = masterdata.getData('educationLevels');

  $scope.member = resultData ? resultData.data[0] : {};

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
