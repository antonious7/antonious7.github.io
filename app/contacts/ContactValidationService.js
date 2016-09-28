;(function () {
  'use strict';

  angular
    .module('app')
    .factory('ContactValidationService', ContactValidationService);

  ContactValidationService.$inject = [];

  function ContactValidationService () {

    return {
      isContactValid: _isContactValid,
      isIdValid: _isIdValid
    };

    function _isContactValid (contact) {
      if (contact && contact.hasOwnProperty('id')
        && contact.hasOwnProperty('firstName')
        && contact.hasOwnProperty('lastName')
        && contact.hasOwnProperty('phoneNumber')) {
        return true
      }
    }

    function _isIdValid (index,contacts) {
      if (!isNaN(parseInt(index, 10)) && isFinite(index)
        && index >= 0 && index < contacts.length) {
        return true
      }
    }
  }
})();
