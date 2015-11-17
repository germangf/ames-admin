'use strict';

angular.module('ames-admin')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('/dashboard', '');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'components/dashboard/dashboard.tpl.html',
      controller: 'DashboardCtrl'
    })
    .state('member', {
      abstract: true,
      url: '/member',
      templateUrl: 'components/member/member.tpl.html',
      controller: 'MemberCtrl'
    })
    .state('member.list', {
      parent: 'member',
      url: '',
      templateUrl: 'components/member/member-list.tpl.html',
      controller: 'MemberListCtrl',
      resolve: {
        resultData: ['members', function(members) {
          return members.findActive();
        }]
      }
    })
    .state('member.detail', {
      parent: 'member',
      url: '/:id',
      templateUrl: 'components/member/member-detail.tpl.html',
      controller: 'MemberDetailCtrl',
      resolve: {
        resultData: ['$stateParams', 'members', function($stateParams, members) {
          if ($stateParams.id) {
            return members.findOne($stateParams.id);
          }
        }]
      }
    })
    .state('event', {
      abstract: true,
      url: '/event',
      templateUrl: 'components/event/event.tpl.html',
      controller: 'EventCtrl'
    })
    .state('event.list', {
      parent: 'event',
      url: '',
      templateUrl: 'components/event/event-list.tpl.html',
      controller: 'EventListCtrl',
      resolve: {
        resultData: ['events', function(events) {
          return events.findPending();
        }]
      }
    })
    .state('event.detail', {
      parent: 'event',
      url: '/:id',
      templateUrl: 'components/event/event-detail.tpl.html',
      controller: 'EventDetailCtrl',
      resolve: {
        resultData: ['$stateParams', 'events', function($stateParams, events) {
          if ($stateParams.id) {
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
