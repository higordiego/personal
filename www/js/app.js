angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.routes',
  'starter.factory',
  'ionic-material',
  'ionMdInput',
  'ngStorage'
]).run(function ($ionicPlatform, $rootScope, $location, $ionicHistory) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  $rootScope.GoBack = function () {
    $ionicHistory.goBack();
  };

  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.authorize) {
      if (!InteceptFactory.getToken()) {
        $rootScope.$evalAsync(function () {
          $location.path('/');
        })
      }
    }
  })

}).config(function ($ionicConfigProvider, $httpProvider) {
  $httpProvider.interceptors.push('InteceptFactory');
  $ionicConfigProvider.backButton.previousTitleText(false).text('&emsp;&emsp;');
});
