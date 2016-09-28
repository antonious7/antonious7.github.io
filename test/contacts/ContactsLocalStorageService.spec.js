describe('ContactsLocalStorageService', function () {
    var service,
        mockWindow;
    beforeEach(module('app'));

    beforeEach(inject(function($injector){
        service = $injector.get('ContactsLocalStorageService');
        mockWindow = $injector.get('$window')
    }));

    it('should be defined', function(){
       expect(service).toBeDefined();
    });

    it('should be empty when cleared', function(){
        mockWindow.localStorage.clear();

        expect(service.getAll()).toBeNull();
    });

    it('should be initialized with 3 objects', function(){
       expect(service.getAll()).toBeDefined();
        expect(service.getAll().length).toBe(3);
    });

    it('should save new objects', function(){
       var currentCollection = service.getAll(),
           objectToAdd = {"id": 3, 'firstName': 'Tom', 'lastName': 'Johnson', 'phoneNumber': '0446457474'};

        expect(currentCollection.length).toBe(3);
        currentCollection.push(objectToAdd);
        expect(currentCollection.length).toBe(4);
        expect(currentCollection).toContain(objectToAdd);

    });
});