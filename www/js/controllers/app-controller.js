
angular.module('starter.controllers')
  .controller('AppCtrl', function ($scope, $state) {

    $scope.isExpanded = false;

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
      },{
        id: 1,
        name: 'Rodrigo Galhardo',
        lastText: 'Mister Universo',
        face: 'img/mike.png'
      }
    ];

    $scope.logout = function () {
      $state.go('login')
    }

  });
