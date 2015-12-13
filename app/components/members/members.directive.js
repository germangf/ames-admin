'use strict';

angular.module('ames-admin')
.directive('cMdLanguage', function() {
  return {
    restric: 'E',
    scope: {
      label: '@',
      ngModel: '='
    },
    controller: ['$scope', function($scope) {
      $scope.languageLevels = [
        { code: 'B', description: 'Basico' },
        { code: 'I', description: 'Intermedio' },
        { code: 'A', description: 'Avanzado' }
      ];
    }],
    template: '<md-input-container flex><label>{{label}}</label><md-select ng-model="ngModel">' +
              '<md-option ng-repeat="level in languageLevels" value="{{level.code}}">' +
              '{{level.description}}</md-option></md-select></md-input-container>'
  };
});
