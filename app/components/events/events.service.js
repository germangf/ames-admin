'use strict';

angular.module('ames-admin')
.service('events', ['$http', '$httpParamSerializer', function($http, $httpParamSerializer) {

  this.find = function() {
    return $http.get('/events');
  };

  this.findPending = function() {
    return $http.get('/events?status=PDT');
  };

  this.findOne = function(id) {
    return $http.get('/events/' + id);
  };

  this.save = function(event) {
    return $http.post('/events/', event);
  };

  this.update = function(event) {
    return $http.put('/events/', event);
  };

  this.remove = function(event) {
    return $http.put('/events/' + event._id, event);
  };

  this.filter = function(filterData) {
    //console.log($httpParamSerializer(filterData));
    return $http.get('/events?' + $httpParamSerializer(filterData));
  };


}]);
