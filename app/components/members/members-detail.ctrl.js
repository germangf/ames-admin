(function() {
  'use strict';

  angular.module('ames-admin')
    .controller('MembersDetailCtrl', MembersDetailCtrl);

  MembersDetailCtrl.$inject = ['$state', 'members', 'resolveData', 'masterdata'];
  function MembersDetailCtrl($state, members, resolveData, masterdata) {

    var vmMembersDetail = this;

    vmMembersDetail.cantons = masterdata.getData('cantons');
    vmMembersDetail.memberHows = masterdata.getData('memberHows');
    vmMembersDetail.sections = masterdata.getData('sections');
    vmMembersDetail.maritalStatus = masterdata.getData('maritalStatus');
    vmMembersDetail.nationalities = masterdata.getData('nationalities');
    vmMembersDetail.educationLevels = masterdata.getData('educationLevels');

    vmMembersDetail.member = resolveData ? resolveData.data[0] : {};
    vmMembersDetail.member.birthday = vmMembersDetail.member.birthday && new Date(vmMembersDetail.member.birthday);
    vmMembersDetail.member.inSwitzerlandSince = vmMembersDetail.member.inSwitzerlandSince && new Date(vmMembersDetail.member.inSwitzerlandSince);
    vmMembersDetail.member.startDate = vmMembersDetail.member.startDate && new Date(vmMembersDetail.member.startDate);

    vmMembersDetail.dateOptions = { startingDay: 1 };
    vmMembersDetail.popupBirthday = { opened: false };
    vmMembersDetail.popupInSwitzerland = { opened: false };
    vmMembersDetail.popupStart = { opened: false };

    vmMembersDetail.openBirthday = openBirthday;
    vmMembersDetail.openInSwitzerland = openInSwitzerland;
    vmMembersDetail.openStart = openStart;
    vmMembersDetail.save = save;
    vmMembersDetail.update = update;
    vmMembersDetail.remove = remove;

    //////

    function openBirthday() {
      vmMembersDetail.popupBirthday.opened = true;
    };

    function openInSwitzerland() {
      vmMembersDetail.popupInSwitzerland.opened = true;
    };

    function openStart() {
      vmMembersDetail.popupStart.opened = true;
    };

    function save() {
      members.save(vmMembersDetail.member);
      $state.go('members.inactive');
    };

    function update() {
      members.update(vmMembersDetail.member);
      $state.go('members.inactive');
    };

    function remove() {
      console.log('members-details.ctrl.js');
      members.remove(vmMembersDetail.member);
      $state.go('members.inactive');
    };

  }
})();
