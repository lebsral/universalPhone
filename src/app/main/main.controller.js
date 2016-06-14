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
    vm.creationDate = 1465888691890;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getpeopleService();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getpeopleService() {
      vm.awesomeThings = peopleService.getPeople();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();

