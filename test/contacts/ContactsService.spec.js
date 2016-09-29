describe('ContactsService', function () {
    var ContactsService,
        employees = [
            {'id': 0, 'firstName': 'John', 'lastName': 'Smith', 'phoneNumber': '0442234323'},
            {'id': 1, 'firstName': 'Natasha', 'lastName': 'Collins', 'phoneNumber': '0434534432'},
            {'id': 2, 'firstName': 'Larry', 'lastName': 'Jones', 'phoneNumber': '0445648432'}
        ],
        employee;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        ContactsService = $injector.get('ContactsService')
    }));

    it('should be defined', function () {
        expect(ContactsService).toBeDefined()
    });

    describe('getAllContact()', function () {
        it('should be defined', function () {
            expect(ContactsService.getAllContacts).toBeDefined()
        });

        it('should create new record', function () {
            expect(ContactsService.getAllContacts()).toEqual(employees)
        })
    });

    describe('createContact(contact)', function () {
        beforeEach(function () {
            employee = {"id": 3, 'firstName': 'Tom', 'lastName': 'Johnson', 'phoneNumber': '0446457474'};
        });

        it('should be defined', function () {
            expect(ContactsService.createContact).toBeDefined();
        });

        it('should create new record', function () {

            expect(ContactsService.getAllContacts()).toEqual(employees);
            expect(ContactsService.getAllContacts()).not.toContain(employee);

            ContactsService.createContact(employee);
            expect(ContactsService.getAllContacts()).toContain(employee);
        });

        it('should not create new record whe no argument passed', function () {
            expect(ContactsService.getAllContacts()).toEqual(employees);
            expect(ContactsService.getAllContacts()).not.toContain(employee);

            ContactsService.createContact();
            expect(ContactsService.getAllContacts()).not.toContain(employee);
        });

        it('should create a new record which has the next available id', function(){
            var listSize = employees.length,
                employee = {"id": 0, 'firstName': 'Tom', 'lastName': 'Johnson', 'phoneNumber': '0446457474'},
                initialId = employee.id;

            expect(ContactsService.getAllContacts()).toEqual(employees);

            ContactsService.createContact(employee);

            expect(ContactsService.getAllContacts()[initialId]).not.toEqual(employee);
            expect(ContactsService.getAllContacts()[listSize]).toEqual(employee);

        });
    });

    describe('editContact(id, contact)', function () {
        it('should be defined', function () {
            expect(ContactsService.editContact).toBeDefined();
        });

        it('should not work without parameter', function () {
            var arrayBeforeEditing = ContactsService.getAllContacts();

            ContactsService.editContact();
            expect(ContactsService.getAllContacts()).toEqual(arrayBeforeEditing)
        });

        it('should not work without second argument', function () {
            var arrayBeforeEditing = employees,
                index = 0;

            ContactsService.editContact(index);
            expect(ContactsService.getAllContacts()[index]).toEqual(arrayBeforeEditing[index])
        });

        it('should edit existing object', function () {
            var arrayBeforeEditing = ContactsService.getAllContacts(),
                index = 0,
                employeeToEdit = {
                    'id': 0,
                    'firstName': 'Hello',
                    'lastName': 'World',
                    'phoneNumber': '234534674574'
                };
            expect(arrayBeforeEditing).not.toContain(employeeToEdit);

            ContactsService.editContact(index, employeeToEdit);

            expect(ContactsService.getAllContacts()).toContain(employeeToEdit)
        })
    });

    describe('deleteContact(contact)', function () {
        it('should be defined', function () {
            expect(ContactsService.deleteContact).toBeDefined()
        });

        it('should not work when object is not contained', function () {
            var arrayBeforeDeleting = ContactsService.getAllContacts(),
                employeeToDelete = {
                    'firstName': 'Hello',
                    'lastName': 'World',
                    'phoneNumber': '234534674574'
                };

            expect(arrayBeforeDeleting).not.toContain(employeeToDelete);

            ContactsService.deleteContact(employeeToDelete);

            expect(ContactsService.getAllContacts()).toEqual(arrayBeforeDeleting)
        });

        it('should not find the object in the array after deletion', function () {
            var arrayBeforeDeleting = ContactsService.getAllContacts(),
                employeeToDelete = arrayBeforeDeleting[0];

            expect(arrayBeforeDeleting).toContain(employeeToDelete);

            ContactsService.deleteContact(employeeToDelete);

            expect(ContactsService.getAllContacts()).not.toContain(employeeToDelete)
        });

        it('should change the collection length after deleting', function () {
            var arrayBeforeDeleting = ContactsService.getAllContacts(),
                employeeToDelete = arrayBeforeDeleting[0];

            ContactsService.deleteContact(employeeToDelete);

            expect(ContactsService.getAllContacts().length).toEqual(arrayBeforeDeleting.length);
        })
    })
});