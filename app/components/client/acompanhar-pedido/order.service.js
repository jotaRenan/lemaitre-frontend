angular.module('leMaitre')
.factory('orderManagementFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){

  const orderBaseURL = `${apiEndpoint}/webresources/order/`;
  
  return {
    retrieveOrdersByToken: function(token) {
      return $http({
        method: 'GET',
        url: `${orderBaseURL}/${token}`,
      });
    }
  };
}]);
