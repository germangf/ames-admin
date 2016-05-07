'use strict';

angular.module('ames-admin')
.controller('MembersInactiveCtrl', ['$scope', 'resolveData', 'members', 'masterdata', 'DTOptionsBuilder',
  function($scope, resolveData, members, masterdata, DTOptionsBuilder) {

  $scope.members = resolveData.data;
  setDescriptions($scope, masterdata);

  $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('stateSave', true);

  $scope.activate = function(index, member) {
    $scope.members.splice(index, 1);
    member.status = 'MEMBER';
    members.update(member);
  };

}]);

function setDescriptions($scope, masterdata) {
  angular.forEach($scope.members, function(value, key) {
    if (value.ames && value.ames.section) {
      value.ames.sectionDescription = masterdata.getDescription(value.ames.section, 'sections');
    }
  });
}
