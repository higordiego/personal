(function(){
  'use strict';
  app.run(function($ionicPlatform, $rootScope, $ionicHistory) {
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
  }).config(function($ionicConfigProvider){
     $ionicConfigProvider.backButton.previousTitleText(false).text('&emsp;&emsp;');
  })

})();
