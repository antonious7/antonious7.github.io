(function () {

  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('app', [
    'ngRoute'
  ])
  
  .config(['$routeProvider', function ($routeProvider) {

      $routeProvider
        .when('/', {
          templateUrl:'/contacts/contacts.html',
          controller: 'ContactsController',
          controllerAs: 'contacts'
        })
        .otherwise({redirectTo: '/'});
    }]);
})();
