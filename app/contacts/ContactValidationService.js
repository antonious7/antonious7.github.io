;
(function () {
    'use strict';

    angular
        .module('app')
        .factory('ContactValidationService', ContactValidationService);

    ContactValidationService.$inject = [];

    function ContactValidationService() {

        return {
            isContactValid: _isContactValid,
            isIdValid: _isIdValid
        };

        function _isContactValid(contact) {
            return contact && contact.hasOwnProperty('firstName')
                && contact.hasOwnProperty('lastName')
                && contact.hasOwnProperty('phoneNumber');
        }

        function _isIdValid(index, contacts) {
            var id = parseInt(index, 10);
            return (!isNaN(id) && isFinite(id) && (id >= 0 && id <= contacts.length));
        }
    }
})();
