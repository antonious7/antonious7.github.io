describe('ContactController', function () {
    var $controller, ctrl;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        $controller = $injector.get('$controller');
        ctrl = $controller('ContactsController')
    }));

    it('should be defined', function(){
        expect(ctrl).toBeDefined();
    });
});