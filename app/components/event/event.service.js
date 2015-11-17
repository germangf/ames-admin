'use strict';

angular.module('ames-admin')
.service('events', ['$http', function($http) {

  this.find = function() {
    return $http.get('/event')
      .success(function(data) {
        return data;
      });
  };

  this.findPending = function() {
    return $http.get('/event/pending')
      .success(function(data) {
        return data;
      });
  };

  this.findOne = function(id) {
    return $http.get('/event/' + id)
      .success(function(data) {
        return data;
      });
  };

  this.save = function(event) {
    return $http.post('/event/', event)
      .success(function(data) {
        return data;
      });
  };

  this.update = function(event) {
    return $http.put('/event/', event)
      .success(function(data) {
        return data;
      });
  };

  this.remove = function(event) {
    return $http.put('/event/' + event._id, event)
      .success(function(data) {
        return data;
      });
  };

  this.filter = function(filterData) {
    return $http.post('/event/filter', filterData)
      .success(function(data) {
        return data;
      });
  };

}]);
