(function() {
  'use strict';
  
  angular.module('ames-admin')
    .controller('MembersActiveCtrl', MembersActiveCtrl);

  MembersActiveCtrl.$inject = ['resolveData', 'members', 'masterdata', 'DTOptionsBuilder'];
  function MembersActiveCtrl(resolveData, members, masterdata, DTOptionsBuilder) {

    var vmMembersActive = this;

    // members data
    vmMembersActive.members = resolveData.data;
    vmMembersActive.dtOptions = DTOptionsBuilder.newOptions().withOption('stateSave', true);

    vmMembersActive.deactivate = deactivate;
    
    setDescriptions(masterdata);

    ////// 

    function deactivate(index, member) {
      vmMembersActive.members.splice(index, 1);
      member.status = 'EX_MEMBER';
      members.update(member);
    };
    
    function setDescriptions(masterdata) {
      angular.forEach(vmMembersActive.members, function(value, key) {
        if (value.ames && value.ames.section) {
          value.ames.sectionDescription = masterdata.getDescription(value.ames.section, 'sections');
        }
      });
    }
  }
})();
