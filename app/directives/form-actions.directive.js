'use strict';

angular.module('ames-admin')
.directive('formActions', function() {
  return {
    restrict: 'E',
    scope: {
      memberId: '=',
      delete: '&delete'
    },
    template: '<div class="form-actions">'
            + '   <div class="row">'
            + '     <div class="col-md-12">'
            + '       <button class="btn btn-danger" ng-click="delete()" ng-show="memberId"><i class="glyphicon glyphicon-remove"></i> Eliminar</button>'
            + '       <button class="btn btn-primary" type="submit"><i class="glyphicon glyphicon-ok"></i> Guardar</button>'
            + '     </div>'
            + '   </div>'
            + '</div>'
  };
});