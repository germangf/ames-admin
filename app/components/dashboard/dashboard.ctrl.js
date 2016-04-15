angular.module('ames-admin')
.controller('DashboardCtrl', ['$scope', 'count', 'countPending', 'countBS', 'countBE', 'countGE', 'countLS', 'countZH', 
  function($scope, count, countPending, countBS, countBE, countGE, countLS, countZH) {
  $scope.count = count.data.count;
  $scope.countPending = countPending.data.count;
  $scope.countBS = countBS.data.count;
  $scope.countBE = countBE.data.count;
  $scope.countGE = countGE.data.count;
  $scope.countLS = countLS.data.count;
  $scope.countZH = countZH.data.count;
}]);
