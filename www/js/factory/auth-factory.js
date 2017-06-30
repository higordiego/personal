angular.module('starter.factory')
  .factory('AuthFactory', function ($http, $localStorage, $q, $window, Config) {
    return {
      getToken: function () {
        return $localStorage.token;
      },
      setToken: function (token) {
        $localStorage.token = token;
      },
      signin: function (data) {
        return $http.post(Config.url + 'auth', data)
      },
      setUser: function (user) {
        $localStorage.user = user;
      },
      getUser: function () {
        return $localStorage.user;
      },
      logout: function () {
        delete $localStorage.token;
        delete $localStorage.user;
        $q.when();
      }
    };
  });
