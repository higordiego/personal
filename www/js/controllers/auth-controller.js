(function(){
	'use strict';
	
	redeative.controller('AuthCtrl', function($scope, $state){
		$scope.authenticate = function(user){
			$state.go('app.home');
		}
	});

})();
