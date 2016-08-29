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

    describe('getAllContact()',function(){
        it('should be defined', function(){
            expect(ContactsService.getAllContacts).toBeDefined();
        });

        it('should create new record', function(){
            expect(ContactsService.getAllContacts()).toEqual(employees);
        });
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

    describe('editContact(contact)',function(){
        it('should be defined', function(){
            expect(ContactsService.editContact).toBeDefined();
        });

        it('should not work without parameter', function(){
            var arrayBeforeEditing = ContactsService.getAllContacts();

            ContactsService.editContact();
            expect(ContactsService.getAllContacts()).toEqual(arrayBeforeEditing);
        });

        it('should not work without second argument', function(){
            var arrayBeforeEditing = employees,
            index = 0;

            ContactsService.editContact(index);
            expect(ContactsService.getAllContacts()[index]).toEqual(arrayBeforeEditing[index]);
        });

        it('should edit existing object', function(){
            var arrayBeforeEditing = ContactsService.getAllContacts(),
            index = 0,
            employeeToEdit = {
                "firstName" : "Hello",
                "lastName" : "World",
                "phoneNumber" : "234534674574"
            };
            expect(ContactsService.getAllContacts()).not.toContain(employeeToEdit);

            ContactsService.editContact(index, employeeToEdit);

            expect(ContactsService.getAllContacts()).toContain(employeeToEdit);
        });
    });
});