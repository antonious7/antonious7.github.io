(function () {

    'use strict';

    angular
        .module('app')
        .controller('ContactsController', ContactsController);
    
    ContactsController.$inject = [];

    function ContactsController() {
        var vm = this;

        vm.title = "Simple contacts list";
    }
})();