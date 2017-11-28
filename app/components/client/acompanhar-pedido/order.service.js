angular.module('leMaitre')
.factory('orderManagementFactory', ['$http', '$sessionStorage', 'apiEndpoint', function($http, $sessionStorage, apiEndpoint){

  const orderBaseURL = `${apiEndpoint}/webresources/order/`;

  return {
    retrieveOrdersByToken: function(token) {
      return $http({
        method: 'GET',
        url: `${orderBaseURL}/${token}`,
      });
    },

    retrieveOpenOrders: function() {
      return $http({
        method: 'GET',
        url: `${orderBaseURL}`,
      });
    },

    placeOrder: function(order, token = $sessionStorage.token ) {
      return $http({
        method: 'POST',
        url: `${apiEndpoint}/OrdersCreate`,
        data: {codToken: token, items: order}
      });
    },
    // ORDER SUGAR SYNTAX
    orderJSONSugar: function(badSyntax) {
      let order = {};
      order.token = badSyntax.codToken;
      order.timestamp = badSyntax.datOrder;
      order.status = badSyntax.idtStatus;
      order.price = badSyntax.vlrPrice * badSyntax.qtdItem;
      order.item = badSyntax.item;
      order.quantity = badSyntax.qtdItem;
      return order;
    }
  };
}]);
