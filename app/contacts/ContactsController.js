(function () {

    'use strict';

    angular
        .module('app')
        .controller('ContactsController', ContactsController);
    
    ContactsController.$inject = ['ContactsService'];

    function ContactsController(ContactsService) {
        var vm = this;

        vm.title = "Simple contacts list";
        
        vm.contact = {};
        vm.contacts = ContactsService.getAllContacts();
        
        vm.createContact = function(contact) {
            ContactsService.createContact(contact);
            vm.contact = {};
        }
    };  
})();