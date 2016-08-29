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
        vm.contactToEdit = {};

        vm.contacts = ContactsService.getAllContacts();
        
        vm.createContact = function(contact) {
            ContactsService.createContact(contact);
            vm.contact = {};
        }

        vm.setEditable = function(id, contact) {
            vm.contactToEdit = angular.merge({},contact, {id : id});
            console.log(vm.contactToEdit);
        }

        vm.editContact = function(id, contact){
            console.log(contact);
            ContactsService.editContact(contact.id, contact);
            vm.contactToEdit = {};
        }
    };  
})();