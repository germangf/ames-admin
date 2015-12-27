'use strict';

angular.module('ames-admin')
.directive('cMdSection', function () {
  return {
    restrict: 'E',
    scope: {
      label: '@',
      ngModel: '='
    },
    controller: ['$scope', function($scope) {
      $scope.sections = [
        { code: 'BS', description: 'Basilea' },
        { code: 'BE', description: 'Berna' },
        { code: 'GE', description: 'Ginebra' },
        { code: 'LS', description: 'Lausana' },
        { code: 'ZH', description: 'Zurich' }];
    }],
    template: '<md-input-container flex><label>{{label != null ? label : "Sección"}}</label>'
      + '<md-select ng-model="ngModel"><md-option ng-repeat="section in sections" value="{{section.code}}">'
      + '{{section.description}}</md-option></md-select></md-input-container>'
  };
});
