(function () {

  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('app', [
    'ngRoute'
  ])
  
  .config(['$routeProvider', '$locationProvider', '$compileProvider', function ($routeProvider, $locationProvider, $compileProvider) {
      $locationProvider.html5Mode(true);
      $compileProvider.debugInfoEnabled(false);
      $routeProvider
        .when('/', {
          templateUrl:'/app/contacts/contacts.html',
          controller: 'ContactsController',
          controllerAs: 'contacts'
        })
        .otherwise({redirectTo: '/'});
    }]);
})();
