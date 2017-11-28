angular.module('leMaitre-kitchen')
.factory('orderManagementFactory', ['$http', 'apiEndpoint', 'itemManagementFactory', function($http, apiEndpoint, itemManagementFactory){

  const orderBaseURL = `${apiEndpoint}/webresources/order/`;

  return {
    retrieveOpenOrders: function() {
      return $http({
        method: 'GET',
        url: `${orderBaseURL}`,
      });
    },

    updateOrder: function(order) {
      return $http({
        method: 'POST',
        url: `${apiEndpoint}/OrderUpdate`,
        data: {codToken: order.codToken, idtStatus: order.idtStatus, codItem: order.item.codItem, idtAvailable: order.item.idtAvailable}
      });
    },

    // ORDER SUGAR SYNTAX
    orderJSONSugar: function(badSyntax) {
      let order = {};
      order.token = badSyntax.codToken;
      order.timestamp = new Date(badSyntax.datOrder);
      order.status = badSyntax.idtStatus;
      order.price = badSyntax.vlrPrice * badSyntax.qtdItem;
      order.item = badSyntax.item;
      return order;
    },

    reverseJSONSugar: function(goodSyntax) {
      let badSyntax = {};
      badSyntax.codToken = goodSyntax.token;
      badSyntax.idtStatus = goodSyntax.status;
      badSyntax.item = itemManagementFactory.reverseJSONSyntaxSugar(goodSyntax.item);
      return badSyntax;
    }
  };
}]);
