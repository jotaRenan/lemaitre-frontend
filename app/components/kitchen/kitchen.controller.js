angular.module('leMaitre-kitchen')
.controller('KitchenCtrl', ['$scope', '$interval', 'orderManagementFactory', 'itemManagementFactory', function($scope, $interval, orderManagementFactory, itemManagementFactory){

  let orders;
  const ordersTime = {
    RECENTLY: 3e5,
    MODERATELY: 1.2e6,
    LONG_AGO: 1.2e6,
  }; // value in miliseconds
  const REFRESH_DELAY = 3000;

  const calcMinutesOfAge = (timestamp) => {
    return Math.abs(new Date() - timestamp) ;
  };

  const exhibitError = error => {
    alert(`Erro ${error.status || error.name}: ${error.statusText || error.message}`);
  };

  $scope.orders = [];

  const retrieveOpenOrders = () => {
    orderManagementFactory.retrieveOpenOrders()
      .then(response => {
        const orders = response.data.content.map(orderManagementFactory.orderJSONSugar);
        orders.forEach(order => order.item = itemManagementFactory.itemJSONSyntaxSugar(order.item));
        $scope.recentlyRequestedOrders = orders.filter(order => calcMinutesOfAge(order.timestamp) < ordersTime.RECENTLY);
        $scope.moderatelyRequestedOrders = orders.filter(order => calcMinutesOfAge(order.timestamp) < ordersTime.MODERATELY && calcMinutesOfAge(order.timestamp) >= ordersTime.RECENTLY);
        $scope.longAgoRequestedOrders = orders.filter(order => calcMinutesOfAge(order.timestamp) >= ordersTime.LONG_AGO);

      })
      .catch(error => exhibitError(error));
  };

  $scope.improveOrderStatus = (order) => {
    orderManagementFactory.updateOrder(orderManagementFactory.reverseJSONSugar(order))
      .then()
      .catch(error => exhibitError(error));
  };

  $scope.getItemStatusCSSClass = status => {
    switch (status) {
      case 'N': //todo
        return 'ultra-red';
      case 'P': //doing
        return 'orange';
      case 'D': //ready
        return 'lightgreen';
    }
  };
  retrieveOpenOrders();
  $interval(retrieveOpenOrders, REFRESH_DELAY);
}]);
