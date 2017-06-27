(function(){
  'use strict';
  app.controller('AuthCtrl', ['$scope','$state'
  ,  function($scope, $state){
    $scope.authenticate = function(user){
      $state.go('app.home')
    }
  }]);
})();
