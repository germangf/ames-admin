(function() {
  'use strict';

  angular.module('ames-admin')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'components/dashboard/dashboard.tpl.html',
        controller: 'DashboardCtrl',
        resolve: {
          count: ['members', function(members) {
            return members.filter({ 'quoteYear': 'CRT', 'status': 'MEMBER' });
          }],
          countPending: ['members', function(members) {
            return members.filter({ 'quoteYear': 'PENDING', 'status': 'MEMBER' });
          }],
          countBS: ['members', function(members) {
            return members.filter({ 'section': 'BS' });
          }],
          countBE: ['members', function(members) {
            return members.filter({ 'section': 'BE' });
          }],
          countGE: ['members', function(members) {
            return members.filter({ 'section': 'GE' });
          }],
          countLS: ['members', function(members) {
            return members.filter({ 'section': 'LS' });
          }],
          countZH: ['members', function(members) {
            return members.filter({ 'section': 'ZH' });
          }]
        }
      })

      .state('admin', {
        url: '/admin',
        templateUrl: 'components/admin/admin.tpl.html',
        controller: 'AdminCtrl',
        resolve: {
          president: ['members', function(members) {
            return members.filter({ 'position': 'PRESIDENT' });
          }],
          treasurer: ['members', function(members) {
            return members.filter({ 'position': 'TREASURER' });
          }],
          secretary: ['members', function(members) {
            return members.filter({ 'position': 'SECRETARY' });
          }],
          deputies: ['members', function(members) {
            return members.filter({ 'position': 'DEPUTY' });
          }],
          chairs: ['members', function(members) {
            return members.filter({ 'position': 'CHAIR' });
          }],
          communication: ['members', function(members) {
            return members.filter({ 'position': 'COMMUNICATION' });
          }],
          support: ['members', function(members) {
            return members.filter({ 'position': 'SUPPORT' });
          }],
          availableMembers: ['members', function(members) {
            return members.filter();
          }],
          membersOfBasilea: ['members', function(members) {
            return members.filter({ 'section': 'BS' });
          }],
          membersOfBerna: ['members', function(members) {
            return members.filter({ 'section': 'BE' });
          }],
          membersOfGinebra: ['members', function(members) {
            return members.filter({ 'section': 'GE' });
          }],
          membersOfLausana: ['members', function(members) {
            return members.filter({ 'section': 'LS' });
          }],
          membersOfZurich: ['members', function(members) {
            return members.filter({ 'section': 'ZH' });
          }]
        }
      })

      .state('members', {
        abstract: true,
        url: '/members',
        templateUrl: 'components/members/members.tpl.html',
        controller: 'MembersCtrl'
      })
      .state('members.active', {
        parent: 'members',
        url: '/',
        templateUrl: 'components/members/members-active.tpl.html',
        controller: 'MembersActiveCtrl',
        controllerAs: 'mActiveCtrl',
        resolve: {
          resolveData: ['members', function(members) {
            return members.filter({ status: ['MEMBER', 'MEMBER'] });
          }]
        }
      })
      .state('members.inactive', {
        parent: 'members',
        url: '/not',
        templateUrl: 'components/members/members-inactive.tpl.html',
        controller: 'MembersInactiveCtrl',
        controllerAs: 'mInactiveCtrl',
        resolve: {
          resolveData: ['members', function(members) {
            return members.filter({ status: ['NO_MEMBER', 'EX_MEMBER'] });
          }]
        }
      })
      .state('members.detail', {
        parent: 'members',
        url: '/:id',
        templateUrl: 'components/members/members-detail.tpl.html',
        controller: 'MembersDetailCtrl',
        controllerAs: 'mDetailCtrl',
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
            return events.filter({ status: 'CREATED' });
          }]
        }
      })
      .state('events.detail', {
        parent: 'events',
        url: '/:id',
        templateUrl: 'components/events/events-detail.tpl.html',
        controller: 'EventsDetailCtrl',
        resolve: {
          resolveData: ['$stateParams', 'events', function($stateParams, events) {
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
})();

