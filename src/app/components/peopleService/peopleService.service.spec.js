(function() {
  'use strict';

  describe('service peopleService', function() {
    var peopleService;

    beforeEach(module('universalPhone'));
    beforeEach(inject(function(_peopleService_) {
      peopleService = _peopleService_;
    }));

    it('should be registered', function() {
      expect(peopleService).not.toEqual(null);
    });

    describe('getTec function', function() {
      it('should exist', function() {
        expect(peopleService.getTec).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = peopleService.getTec();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
