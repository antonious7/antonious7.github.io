(function () {
    'use strict';

    // services are the best place to keep business logic
    // in addition they could be used for sharing common data for different pages

    angular
        .module('app')
        .factory('ContactsService', ContactsService);

    ContactsService.$inject = ['ContactValidationService', 'ContactsLocalStorageService'];

    function ContactsService(ContactValidationService, ContactsLocalStorageService) {
        // -------- private members --------
        var contacts = ContactsLocalStorageService.getAll();

        // -------- public methods ---------
        return {
            createContact: _createContact,
            getAllContacts: _getAllContacts,
            saveAllContacts: _saveAllContacts,
            editContact: _editContact,
            deleteContact: _deleteContact
        };

        // -------- private methods ---------
        function _createContact(contact) {
            if (contact && ContactValidationService.isContactValid(contact)) {
                contact.id = contacts.length;
                contacts.push(contact)

            }
        }

        function _getAllContacts() {
            return contacts;
        }

        function _saveAllContacts() {
            return ContactsLocalStorageService.saveAll(contacts);
        }

        function _editContact(id, contact) {
            if (ContactValidationService.isIdValid(id, contacts)
                && ContactValidationService.isContactValid(contact)) {
                contacts[id] = contact
            }
        }

        function _deleteContact(contact) {
            if (ContactValidationService.isContactValid(contact)) {
                for (var index = 0, length = contacts.length; index < length; index++) {
                    if (angular.equals(contacts[index], contact)) {
                        contacts.splice(index, 1)
                    }
                }
            }
        }
    }
})();
