'use strict';

angular.module('ames-admin')
.controller('MembersActiveCtrl', ['$scope', 'resolveData', 'members', 'masterdata', 'DTOptionsBuilder',
  function($scope, resolveData, members, masterdata, DTOptionsBuilder) {

  // members data
  $scope.members = resolveData.data;
  setDescriptions($scope, masterdata);

  $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('stateSave', true);

  $scope.deactivate = function(index, member) {
    $scope.members.splice(index, 1);
    member.status = 'EX_MEMBER';
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
