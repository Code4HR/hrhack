'use strict';

describe('Service: petition', function () {

  // load the service's module
  beforeEach(module('hrhackApp'));

  // instantiate service
  var petition;
  beforeEach(inject(function (_petition_) {
    petition = _petition_;
  }));

  it('should do something', function () {
    expect(!!petition).toBe(true);
  });

});
