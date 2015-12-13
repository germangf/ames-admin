'use strict';

angular.module('ames-admin')
.service('members', ['$http', '$httpParamSerializer', function($http, $httpParamSerializer) {

	this.find = function() {
		return $http.get('/members');
		/*
			.success(function(data) {
				return data;
			});
		*/
	};

	this.findActive = function() {
		return $http.get('/members?status=ACT');
		/*
			.success(function(data) {
				console.log(data);
				return data;
			});
		*/
	};

	this.findOne = function(id) {
		return $http.get('/members/' + id);
		/*
			.success(function(data) {
				return data;
			});
		*/
	};

	this.save = function(member) {
		return $http.post('/members/', member)
			.success(function(data) {
				return data;
			});
	};

	this.update = function(member) {
		return $http.put('/members/' + member._id, member);
		/*
			.success(function(data) {
				return data;
			});
		*/
	};

	this.delete = function(member) {
		return $http.delete('/members/' + member._id, member);
		/*
			.success(function(data) {
				return data;
			});
		*/
	};

	this.filter = function(filterData) {
		console.log($httpParamSerializer(filterData));
		return $http.get('/members?' + $httpParamSerializer(filterData));
		/*
			.success(function(data) {
				return data;
			});
		*/
	};

}]);
