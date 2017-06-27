(function(){
    'use strict'
    app.run(function ($rootScope, $location, InteceptFactory) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (next.authorize) {
                if (!InteceptFactory.getToken()) {
                $rootScope.$evalAsync(function () {
                    $location.path('/');
                })
            }
        }
    });
    });
})();
