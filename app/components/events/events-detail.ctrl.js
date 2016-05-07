'use strict';

angular.module('ames-admin')
.controller('EventsDetailCtrl', ['$scope', '$state', 'events', 'resolveData', 'masterdata',
  function($scope, $state, events, resolveData, masterdata) {

  $scope.sections = masterdata.getData('sections');
  //$scope.eventTypes = masterdata.getData('eventTypes');

  $scope.event = resolveData ? resolveData.data[0] : {};
  //$scope.event.date = moment($scope.event.date).toDate();
  //$scope.member.birthday = $scope.member.birthday && new Date($scope.member.birthday);

  $scope.organizers = [
      { name: "Manuela Garcia", section: "(Berna)", ticked: false  },
      { name: "Pilar Gomez", section: "(Zurich)", ticked: false },
      { name: "Josefa Gutierrez", section: "(Lausana)", ticked: false  },
      { name: "Pepa Garcia", section: "(Basel)", ticked: false },
      { name: "Sofia Ruiz", section: "(Ginebra)", ticked: false  }
  ];

  $scope.selectedOrganizers2 = [];
  $scope.organizers2 = [
      { id: 1, label: "Manuela Garcia (Berna)"  },
      { id: 2, label: "Pilar Gomez (Zurich)" },
      { id: 3, label: "Josefa Gutierrez (Lausana)"  },
      { id: 4, label: "Pepa Garcia (Basel)" },
      { id: 5, label: "Sofia Ruiz (Ginebra)"  }
  ];

  $scope.multiSelectSettings = {
    smartButtonMaxItems: 3,
    showCheckAll: false,
    showUncheckAll: false,
    buttonClasses: 'btn btn-block btn-default'
  };

  $scope.save = function() {
    events.save($scope.event);
    $state.go('events.list');
  };

  $scope.update = function() {
    events.update($scope.event);
    $state.go('events.list');
  };

  $scope.remove = function() {
    events.remove($scope.event);
    $state.go('events.list');
  };

}]);
