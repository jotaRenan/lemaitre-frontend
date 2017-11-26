angular.module('leMaitre')
.factory('orderManagementFactory', ['$http', '$localStorage', 'apiEndpoint', function($http, $localStorage, apiEndpoint){

  const orderBaseURL = `${apiEndpoint}/webresources/order/`;

  return {
    retrieveOrdersByToken: function(token) {
      return $http({
        method: 'GET',
        url: `${orderBaseURL}/${token}`,
      });
    },

    placeOrder: function(order) {
      return $http({
        method: 'POST',
        url: `${apiEndpoint}/OrderCreate`,
        // data: {codToken: $localStorage.token, items: order.items}
        data: {codToken: 'teste4321', items: order.items}
      });
    }
  };
}]);
