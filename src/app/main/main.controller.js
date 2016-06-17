(function() {
  'use strict';

  angular
    .module('universalPhone')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, peopleService, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getpeopleService();
    }

    function showToastr() {
      toastr.info('Notice: it might be ' +( Math.floor(Math.random() * (7 - 1)) + 1) + ' AM for this person.');
      vm.classAnimation = '';
    }

    function getpeopleService() {
      vm.awesomeThings = peopleService.getPeople();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
        awesomeThing.picNum= Math.floor(Math.random() * (98 - 1)) + 1;
      });
    }
  }
})();

