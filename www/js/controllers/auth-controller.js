
  angular.module('starter.controllers')
    .controller('AuthCtrl', function($scope, $state){
    $scope.authenticate = function(user){
      $state.go('app.home');
    }
  });
