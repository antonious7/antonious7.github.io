(function(){

    /*
        This service provides methods for persisting the data:
            * getAll retrieves everything
            * saveAll stores the data on the localStorage
     */
    'use strict';

    angular.module('app').factory('ContactsLocalStorageService', ContactsLocalStorageService);

    ContactsLocalStorageService.$inject = ['$window'];

    function ContactsLocalStorageService($window) {
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
            $window.localStorage.setItem(locStorageKey, angular.toJson(array));
        }

    }
})();