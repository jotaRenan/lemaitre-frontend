angular.module('leMaitre-kitchen')
.factory('orderManagementFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){

  const orderBaseURL = `${apiEndpoint}/webresources/order/`;

  return {
    retrieveOpenOrders: function() {
      return $http({
        method: 'GET',
        url: `${orderBaseURL}`,
      });
    },

    // ORDER SUGAR SYNTAX
    orderJSONSugar: function(badSyntax) {
      let order = {}, item={};
      order.token = badSyntax.codToken;
      order.timestamp = new Date(badSyntax.datOrder);
      order.status = badSyntax.idtStatus;
      order.price = badSyntax.vlrPrice * badSyntax.qtdItem;
      item.id = badSyntax.codItem;
      item.quantity = badSyntax.qtdItem;
      order.item = item;
      return order;
    }
  };
}]);
