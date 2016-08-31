(function(){
    
    'use strict';

    //services are the best place to keep business logic
    //in addition they could be used for sharing common data for different pages
    
    angular
        .module('app')
        .factory('ContactsService',ContactsService);

    ContactsService.$inject = [];

    function ContactsService() { 
    //-------- private members --------
    var contacts = [
        {"firstName" : "John", "lastName":"Smith", "phoneNumber" : "+444223432"},
        {"firstName" : "Natasha", "lastName":"Collins", "phoneNumber" : "+434534432"},
        {"firstName" : "Larry", "lastName":"Jones", "phoneNumber" : "+445648432"}
        ];
    //-------- public methods ---------
        var service = {
            createContact: _createContact,
            getAllContacts: _getAllContacts,
            editContact: _editContact,
            deleteContact: _deleteContact
        }

        return service;

    //-------- private methods ---------
        function _createContact(contact) {
            if(contact && _isContactValid(contact)) {
                contacts.push(contact);
            }
        }

        function _getAllContacts() {
            return contacts;
        }

        function _isContactValid(contact){
            if(contact.hasOwnProperty("firstName") 
            && contact.hasOwnProperty("lastName") 
            && contact.hasOwnProperty("phoneNumber")) {
                return true;
            }
        }
        function _isIdValid(index) {
            if(!isNaN(parseInt(index,10)) && isFinite(index) 
                && index >=0 && index < contacts.length) {
                return true;
            }
        }

        function _editContact(id, contact) {
            if( _isIdValid(id) && contact && _isContactValid(contact)) {
                contacts[id] = contact;
            }
        }

        function _deleteContact(contact) {
            if(_isContactValid(contact)) {
                for(var i in contacts) {
                    if(angular.equals(contacts[i],contact)) {
                        contacts.splice(i,1);
                    }
                }
            }
        }
    }
})();