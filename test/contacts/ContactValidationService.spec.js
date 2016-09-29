describe('ContactValidationService', function () {
    var service;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        service = $injector.get('ContactValidationService');
    }));

    it('should be defined', function () {
        expect(service).toBeDefined();
    });

    describe('isContactValid', function () {
        it('should return true when contact is valid', function () {
            var validContact = {'id': 0, 'firstName': 'John', 'lastName': 'Smith', 'phoneNumber': '0442234323'};
            expect(service.isContactValid(validContact)).toBe(true);
        });

        it('should return false when contact is not valid', function () {
            var incorrectContact = {'id': 0, 'fullName': 'John Smith', 'phoneNumber': '0442234323'};
            expect(service.isContactValid(incorrectContact)).toBe(false);
        });
    });

    describe('isIdValid', function () {
        it('should return validate if id is in the collection', function () {
            var collection = [
                    {'id':0},
                    {'id':1},
                    {'id':2}
                ],
                id = 1;
            expect(service.isIdValid(id, collection)).toBe(true);
        });
    });
});