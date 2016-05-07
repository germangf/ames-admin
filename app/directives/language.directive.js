'use strict';

angular.module('ames-admin')
.directive('language', function() {
  return {
    restrict: 'E',
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
    template: '<div class="form-group col-md-2">'
            + '   <label>{{label}}</label>'
            + '     <select ng-model="ngModel" class="form-control">'
            + '       <option ng-repeat="level in languageLevels" value="{{level.code}}">'
            + '         {{level.description}}'
            + '       </option>'
            + '   </select>'
            + '</div>'
  };
});
