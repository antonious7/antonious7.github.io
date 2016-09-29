(function(){

    /*
        This service provides methods for persisting the data:
            * getAll retrieves everything
            * saveAll stores the data on the localStorage
     */
    'use strict';

    angular.module('app').factory('ContactsLocalStorageService', ContactsLocalStorageService);

    ContactsLocalStorageService.$inject = ['$window', '$q'];

    function ContactsLocalStorageService($window, $q) {
        var initialData = [
            {'id': 0,'firstName': 'John', 'lastName': 'Smith', 'phoneNumber': '0442234323'},
            {'id': 1,'firstName': 'Natasha', 'lastName': 'Collins', 'phoneNumber': '0434534432'},
            {'id': 2,'firstName': 'Larry', 'lastName': 'Jones', 'phoneNumber': '0445648432'}
        ],
            locStorageKey = 'contacts-list';

        _init();

        return {
            getAll: _getAll,
            saveAll: _saveAll
        };

        function _init() {
            var storedObject = $window.localStorage.getItem(locStorageKey);
            if(!storedObject) {
                _saveAll(initialData);
            }
        }

        function _getAll() {
            return angular.fromJson($window.localStorage.getItem(locStorageKey));
        }

        function _saveAll(array) {
            var q = $q.defer(),
                response = {},
                error = {};

            if(!$window.localStorage) {
                error.message = 'Your browser doesn\'t support local storage';
                error.title = 'Operation won\'t complete';
                q.reject(error);
            } else {
                response.message ='The contact list has been saved!';
                response.title ='Operation completed successfully';
                $window.localStorage.setItem(locStorageKey, angular.toJson(array));
                q.resolve(response);
            }
            return q.promise;

        }

    }
})();