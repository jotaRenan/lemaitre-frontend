angular.module('leMaitre')
.factory('loginManagementFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){
  return {
    login: function(user) {
      setTimeout(() => {}, 1500);
    }
  };

}]);
