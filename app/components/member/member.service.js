'use strict';

angular.module('ames-admin')
.service('members', ['$http', function($http) {

	this.find = function() {
		return $http.get('/member')
			.success(function(data) {
				return data;
			});
	};

	this.findActive = function() {
		return $http.get('/member/active')
			.success(function(data) {
				return data;
			});
	};

	this.findOne = function(id) {
		return $http.get('/member/' + id)
			.success(function(data) {
				return data;
			});
	};

	this.save = function(member) {
		return $http.post('/member/', member)
			.success(function(data) {
				return data;
			});
	};

	this.update = function(member) {
		return $http.put('/member/', member)
			.success(function(data) {
				return data;
			});
	};

	this.remove = function(member) {
		return $http.put('/member/' + member._id, member)
			.success(function(data) {
				return data;
			});
	};

	this.filter = function(filterData) {
		return $http.post('/member/filter', filterData)
			.success(function(data) {
				return data;
			});
	};

}]);
