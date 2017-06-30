angular.module('starter.factory')
  .factory('InteceptFactory', function ($q, $location, $localStorage) {
    return {
      request: function (config) {
        var recebe = config.url.lastIndexOf('upload');
        var cep = config.url.lastIndexOf('cep');
        if (recebe > 1) {
          config.headers['Content-Type'] = undefined;
          config.headers['x-access-token'] = $localStorage.token;
        } else if (cep > 1) {
          config.headers = config.headers || {};
        } else {
          config.headers = config.headers || {};
          config.headers['x-access-token'] = $localStorage.token;
        }
        return config;
      },
      responseError: function (response) {
        if (response.status === 401 || response.status === 403 || response.status === 500) {
          $location.path('/');
        }
        return $q.reject(response);
      }
    };
  });
