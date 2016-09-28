;(function () {
  'use strict';

  // services are the best place to keep business logic
  // in addition they could be used for sharing common data for different pages

  angular
    .module('app')
    .factory('ContactsService', ContactsService);

  ContactsService.$inject = ['ContactValidationService'];

  function ContactsService (ContactValidationService) {
    // -------- private members --------
    var contacts = [
      {'id': 0,'firstName': 'John', 'lastName': 'Smith', 'phoneNumber': '+444223432'},
      {'id': 1,'firstName': 'Natasha', 'lastName': 'Collins', 'phoneNumber': '+434534432'},
      {'id': 2,'firstName': 'Larry', 'lastName': 'Jones', 'phoneNumber': '+445648432'}
    ];
    // -------- public methods ---------
    return {
      createContact: _createContact,
      getAllContacts: _getAllContacts,
      editContact: _editContact,
      deleteContact: _deleteContact
    };

    // -------- private methods ---------
    function _createContact (contact) {
      if (contact && ContactValidationService.isContactValid(contact)) {
        if (!angular.equals(contact, contacts[contact.id])) {
          contacts.push(contact)
        }
      }
    }

    function _getAllContacts () {
      return contacts
    }

    function _editContact (id, contact) {
      if (ContactValidationService.isIdValid(id,contacts) 
            && ContactValidationService.isContactValid(contact)) {
        contacts[id] = contact
      }
    }

    function _deleteContact (contact) {
      if (ContactValidationService.isContactValid(contact)) {
        for (var index in contacts) {
          if (angular.equals(contacts[index], contact)) {
            contacts.splice(index, 1)
          }
        }
      }
    }
  }
})();
