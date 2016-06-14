(function() {
  'use strict';

  angular
    .module('universalPhone')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
