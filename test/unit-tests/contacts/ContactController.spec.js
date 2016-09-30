describe('ContactController', function () {
    var $controller, ctrl, $scope;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        $scope = {};
        $controller = $injector.get('$controller');
        ctrl = $controller('ContactsController', {$scope : $scope})
    }));

    it('should be defined', function(){
        expect(ctrl).toBeDefined();
    });
});