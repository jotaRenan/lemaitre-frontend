angular.module('leMaitre')
.factory('loginManagementFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){
  return {
    generateToken: function() {
      return $http({
        method: 'POST',
        url: `${apiEndpoint}/BillCreate`,
      });
    }
  };

}]);
