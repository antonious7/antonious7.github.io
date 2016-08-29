describe('ContactsService',function(){
    var ContactsService,
    employees = [
            {"firstName" : "John", "lastName":"Smith", "phoneNumber" : "+444223432"},
            {"firstName" : "Natasha", "lastName":"Collins", "phoneNumber" : "+434534432"},
            {"firstName" : "Larry", "lastName":"Jones", "phoneNumber" : "+445648432"}
            ],
    employee;

    beforeEach(module('app'));

    beforeEach(inject(function($injector){
        ContactsService = $injector.get('ContactsService');

    }));

    it('should be defined', function(){
        expect(ContactsService).toBeDefined();
    });

    describe('createContact(contact)',function(){
        beforeEach(function(){
            employee = {"firstName" : "Tom", "lastName":"Johnson", "phoneNumber" : "+446457474"};
        });

        it('should be defined', function(){
            expect(ContactsService.createContact).toBeDefined();
        });

        it('should create new record', function(){
            expect(ContactsService.getAllContacts()).toEqual(employees);
            expect(ContactsService.getAllContacts()).not.toContain(employee);
            
            ContactsService.createContact(employee);
            expect(ContactsService.getAllContacts()).toContain(employee);
        });

        it('should not create new record whe no argument passed', function(){
            expect(ContactsService.getAllContacts()).toEqual(employees);
            expect(ContactsService.getAllContacts()).not.toContain(employee);
            
            ContactsService.createContact();
            expect(ContactsService.getAllContacts()).not.toContain(employee);
        });
    });

});