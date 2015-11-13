angular.module('ames-admin')
.controller('LoginCtrl', ['$scope', function($scope) {

  $scope.msg = 'Aqui estamos!';

  $scope.submit = function() {
    console.log('submitting...');
  };

}]);
