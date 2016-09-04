(function() {
  'use strict';

  angular.module('ames-admin')
    .controller('MembersInactiveCtrl', MembersInactiveCtrl);

  MembersInactiveCtrl.$inject = ['resolveData', 'members', 'masterdata', 'DTOptionsBuilder'];
  function MembersInactiveCtrl(resolveData, members, masterdata, DTOptionsBuilder) {

    var vmMembersInactive = this;

    vmMembersInactive.members = resolveData.data;
    vmMembersInactive.dtOptions = DTOptionsBuilder.newOptions().withOption('stateSave', true);

    vmMembersInactive.activate = activate;    

    setDescriptions(masterdata);

    //////

    function activate(index, member) {
      vmMembersInactive.members.splice(index, 1);
      member.status = 'MEMBER';
      members.update(member);
    };

    function setDescriptions(masterdata) {
      angular.forEach(vmMembersInactive.members, function(value, key) {
        if (value.ames && value.ames.section) {
          value.ames.sectionDescription = masterdata.getDescription(value.ames.section, 'sections');
        }
      });
    };
  }
})();
