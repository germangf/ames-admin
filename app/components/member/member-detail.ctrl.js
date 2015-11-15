'use strict';

angular.module('ames-admin')
.controller('MemberDetailCtrl', ['$scope', '$state', 'members', 'resultData', function($scope, $state, members, resultData) {

  //moment.locale('es');
  $scope.member = resultData ? resultData.data[0] : {};
  //$scope.member.birthday = $scope.member.birthday && moment($scope.member.birthday).format('DD.MM.YYYY');
  //$scope.member.inSwizertlandSince = $scope.member.inSwizertlandSince && moment($scope.member.inSwizertlandSince).format('DD.MM.YYYY');

  $scope.save = function() {
    members.save($scope.member);
    $state.go('member.list');
  };

  $scope.update = function() {
    members.update($scope.member);
    $state.go('member.list');
  };

  $scope.remove = function() {
    console.log($scope.member);
    members.remove($scope.member);
    $state.go('member.list');
	};

  $scope.cantons = [
    { code: 'ZH', description: 'Zürich' },
    { code: 'BE', description: 'Bern' },
    { code: 'LU', description: 'Luzern' },
    { code: 'UR', description: 'Uri' },
    { code: 'SZ', description: 'Schwyz' },
    { code: 'OW', description: 'Obwalden' },
    { code: 'NW', description: 'Nidwalden' },
    { code: 'GL', description: 'Glarus' },
    { code: 'ZG', description: 'Zug' },
    { code: 'FR', description: 'Freiburg' },
    { code: 'SO', description: 'Solothurn' },
    { code: 'BS', description: 'Basel-Stadt' },
    { code: 'BL', description: 'Basel-Landschaft' },
    { code: 'SH', description: 'Schaffhausen' },
    { code: 'AR', description: 'Appenzell Ausserrhoden' },
    { code: 'AI', description: 'Appenzell Innerrhoden' },
    { code: 'SG', description: 'St. Gallen' },
    { code: 'GR', description: 'Graubünden' },
    { code: 'AG', description: 'Aargau' },
    { code: 'TG', description: 'Thurgau' },
    { code: 'TI', description: 'Tessin' },
    { code: 'VD', description: 'Waadt' },
    { code: 'VS', description: 'Wallis' },
    { code: 'NE', description: 'Neuenburg' },
    { code: 'GE', description: 'Genf' },
    { code: 'JU', description: 'Jura' }];

  $scope.hows = [
    { code: 'SO', description: 'Por una socia' },
    { code: 'AC', description: 'Por una actividad/taller' },
    { code: 'IN', description: 'Por Internet' },
    { code: 'OT', description: 'Otro' }];

  $scope.sections = [
    { code: 'BS', description: 'Basilea' },
    { code: 'BE', description: 'Berna' },
    { code: 'GE', description: 'Ginebra' },
    { code: 'LS', description: 'Lausana' },
    { code: 'ZH', description: 'Zurich' }];

  $scope.maritalStatus = [
    { code: 'SO', description: 'Soltera' },
    { code: 'CA', description: 'Casada' },
    { code: 'SE', description: 'Separada' },
    { code: 'DI', description: 'Divorciada' },
    { code: 'VI', description: 'Viuda' },
    { code: 'PH', description: 'Pareja de hecho' }
  ];

  $scope.nationalities = [
    { code: 'ES', description: 'Española' },
    { code: 'CH', description: 'Suiza' },
    { code: 'BO', description: 'Ambas' }
  ];

  $scope.educationLevels = [
    { code: 'BS', description: 'Basicos' },
    { code: 'BC', description: 'Bachiller' },
    { code: 'FP', description: 'Formacion Profesional' },
    { code: 'UN', description: 'Universitarios' }
  ];

  $scope.languageLevels = [
    { code: 'B', description: 'Basico' },
    { code: 'I', description: 'Intermedio' },
    { code: 'A', description: 'Avanzado' }
  ];

}]);
