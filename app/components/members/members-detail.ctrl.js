'use strict';

angular.module('ames-admin')
.controller('MembersDetailCtrl', ['$scope', '$state', '$mdDatePicker', 'members', 'resolveData', 'moment', 'masterdata',
  function($scope, $state, $mdDatePicker, members, resolveData, moment, masterdata) {

  $scope.cantons = masterdata.getData('cantons');
  $scope.memberHows = masterdata.getData('memberHows');
  $scope.sections = masterdata.getData('sections');
  $scope.maritalStatus = masterdata.getData('maritalStatus');
  $scope.nationalities = masterdata.getData('nationalities');
  $scope.educationLevels = masterdata.getData('educationLevels');

  $scope.member = resolveData ? resolveData.data[0] : {};
  $scope.member.birthday = moment($scope.member.birthday).toDate();
  $scope.member.inSwizertlandSince = moment($scope.member.inSwizertlandSince).toDate();

  $scope.showPicker = function(event, ngModel) {
    $scope.member = $scope.member || {};
    $mdDatePicker(event, $scope.member[ngModel])
      .then(function(selectedDate) {
        $scope.member[ngModel] = selectedDate;
      });
  };

  $scope.save = function() {
    members.save($scope.member);
    $state.go('members.list');
  };

  $scope.update = function() {
    members.update($scope.member);
    $state.go('members.list');
  };

  $scope.delete = function() {
    members.delete($scope.member);
    $state.go('members.list');
  };

}]);
