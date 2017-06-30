(function(){
  'use strict';
  redeative.run(function($ionicPlatform, $rootScope, $ionicHistory) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
    $rootScope.GoBack = function() {
      $ionicHistory.goBack();
    };
  });

})();
