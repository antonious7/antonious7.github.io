(function(){

    'use strict';

    angular
        .module('app')
        .filter('filterName', filterName);

    filterName.$inject = [/*dependencies strings go here */];

    function filterName(/*dependencies go here*/) {
        return function(contacts,search) {
            if(!contacts) {
                return contacts;
            }
            else if(angular.isArray(contacts)) {
                if(!search) {
                    return contacts;
                } else {
                    return contacts.filter(function(contact) {
                        return contact.firstName.indexOf(search) !== -1 || contact.lastName.indexOf(search) !== -1;
                    })
                }
            }
         }
    }
})();