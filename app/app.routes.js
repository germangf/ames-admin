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
          return members.findActive();
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
          if (0 !== parseInt($stateParams.id)) {
            return members.findOne($stateParams.id);
          }
        }]
      }
    })


/*
    .state('members', {
      url: '/members',
      templateUrl: 'components/members/members.tpl.html',
      controller: 'MembersCtrl',
      resolve: {
        resolveData: ['$stateParams', 'members', function($stateParams, members) {
          return {
            'showList': true,
            'members': members.findActive()
          };
        }]
      }
    })
    .state('members.detail', {
      url: '/:id',
      templateUrl: 'components/members/members.tpl.html',
      controller: 'MembersDetailCtrl',
      resolve: {
        resolveData: ['$stateParams', 'members', function($stateParams, members) {
          return {
            'showList': false,
            'members': 0 === parseInt($stateParams.id) ? {} : members.findOne($stateParams.id)
          };
        }]
      }
    })
*/
    .state('events', {
      url: '/event',
      templateUrl: 'components/event/event.tpl.html',
      controller: 'EventCtrl',
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
