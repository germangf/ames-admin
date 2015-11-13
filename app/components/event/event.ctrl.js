angular.module('ames-admin')
.controller('EventCtrl', ['$scope', function($scope) {
  $scope.msg = 'EVENT PAGE!';

  $scope.menus = [
  { title: 'Perfil', href: '' },
  { title: 'Datos personales', href: '' },
  { title: 'Direción', href: '' },
  { title: 'Asociación', href: '' },
  { title: 'Educación', href: '' },
  { title: 'Idiomas', href: '' },
  { title: 'Aficiones', href: '' }];
}]);
