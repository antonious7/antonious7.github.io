(function () {

    'use strict';

    angular
        .module('app')
        .controller('ContactsController', ContactsController);
    
    ContactsController.$inject = ['ContactsService', 'toastr'];

    function ContactsController(ContactsService, toastr) {
        var vm = this;

        vm.title = "Simple contacts list";
        
        vm.contact = {};

        vm.contacts = ContactsService.getAllContacts();

        vm.isSelected = function(contact) {
          return vm.contact.id === contact.id;
        };

        vm.createContact = function(contact) {
            ContactsService.createContact(contact);
            vm.contact = {};
        };

        vm.setEditable = function(id, contact) {
            vm.contact = angular.merge({},contact, {id : id});
        };

        vm.editContact = function(id, contact){
            ContactsService.editContact(contact.id, contact);
            vm.contact = {};
        };

        vm.deleteContact = function(contact) {
            ContactsService.deleteContact(contact);
        };

        vm.saveAllContacts = function() {
            ContactsService.saveAllContacts()
            .then(function(){
                toastr.success('The contact list has been saved!', 'Success', {
                    closeButton: true
                });
            }).catch(function(){
                toastr.error('Your browser doesn\'t support local storage', 'Operation won\'t complete', {
                    closeButton: true
                });
            });

        }
    }
})();