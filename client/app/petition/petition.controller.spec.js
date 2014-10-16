'use strict';

describe('Controller: PetitionCtrl', function () {

  // load the controller's module
  beforeEach(module('hrhackApp'));

  var PetitionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PetitionCtrl = $controller('PetitionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
