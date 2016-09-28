(function () {

  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('app', [
    'ngRoute'
  ])
  
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider
        .when('/', {
          templateUrl:'/app/contacts/contacts.html',
          controller: 'ContactsController',
          controllerAs: 'contacts'
        })
        .otherwise({redirectTo: '/'});
    }]);
})();
