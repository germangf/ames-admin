'use strict';

angular.module('ames-admin')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: 'components/dashboard/dashboard.tpl.html',
      controller: 'DashboardCtrl'
    })

    .state('members', {
      abstract: true,
      url: '/members',
      templateUrl: 'components/members/members.tpl.html',
      controller: 'MembersCtrl'
    })
    .state('members.list', {
      parent: 'members',
      url: '/',
      templateUrl: 'components/members/members-list.tpl.html',
      controller: 'MembersListCtrl',
      resolve: {
        resolveData: ['members', function(members) {
          return members.filter({ status: 'ACT' });
        }]
      }
    })
    .state('members.detail', {
      parent: 'members',
      url: '/:id',
      templateUrl: 'components/members/members-detail.tpl.html',
      controller: 'MembersDetailCtrl',
      resolve: {
        resolveData: ['$stateParams', 'members', function($stateParams, members) {
          if ('0' !== $stateParams.id) {
            return members.findOne($stateParams.id);
          }
        }]
      }
    })

    .state('events', {
      abstract: true,
      url: '/events',
      templateUrl: 'components/events/events.tpl.html',
      controller: 'EventsCtrl'
    })
    .state('events.list', {
      parent: 'events',
      url: '/',
      templateUrl: 'components/events/events-list.tpl.html',
      controller: 'EventsListCtrl',
      resolve: {
        resolveData: ['events', function(events) {
          return events.filter({ status: 'PDT' });
        }]
      }
    })
    .state('events.detail', {
      parent: 'events',
      url: '/:id',
      templateUrl: 'components/events/events-detail.tpl.html',
      controller: 'EventsDetailCtrl',
      resolve: {
        resultData: ['$stateParams', 'events', function($stateParams, events) {
          if ('0' !== $stateParams.id) {
            return events.findOne($stateParams.id);
          }
        }]
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'components/login/login.tpl.html',
      controller: 'LoginCtrl'
    });
}]);
