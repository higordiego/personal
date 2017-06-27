(function(){
  'use strict';
  app.controller('AppCtrl', ['$scope','$state', function($scope, $state){
    $scope.chats = [
      {
        id: 0,
        name: 'Jessica Everlyn',
        lastText: 'Hipertrofia',
        face: 'img/ben.png'
      }, {
        id: 1,
        name: 'Higor Diego',
        lastText: 'Hipertrofia',
        face: 'img/max.png'
      }, {
        id: 2,
        name: 'Mikaelle Cristina',
        lastText: 'Hipertrofia',
        face: 'img/adam.jpg'
      }, {
        id: 3,
        name: 'Caio',
        lastText: 'Hipertrofia',
        face: 'img/perry.png'
      }, {
        id: 4,
        name: 'Anderson',
        lastText: 'Hipertrofia',
        face: 'img/mike.png'
      }
    ]

    $scope.logout = function(){
      $state.go('login')
    }

  }]);
})();
