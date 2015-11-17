'use strict';

angular.module('ames-admin')
.controller('MemberCtrl', ['$scope', 'members', function($scope, members) {

	$scope.addMember = function() {
		$scope.members.push($scope.member);
		$scope.member = {};
	};

}]);
