(function(){

    'use strict';

    angular
        .module('app')
        .filter('filterName', filterName);

    filterName.$inject = [];

    function filterName() {
        return function(contacts,letter) {
            if(!contacts) {
                console.log(contacts);
                return contacts;
            }
            else if(angular.isArray(contacts)) {
                if(!letter) {
                    return contacts;
                } else {
                    if(letter.length > 1) {
                        letter = letter.substring(0,1);
                    }
                    return contacts.filter(function(contact) {
                        return contact.firstName.startsWith(letter,0) || contact.lastName.startsWith(letter,0) 
                    })
                }
            }
         }
    }
})();