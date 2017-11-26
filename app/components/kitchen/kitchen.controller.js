angular.module('leMaitre-kitchen')
.controller('KitchenCtrl', ['$scope', '$interval', 'orderManagementFactory', function($scope, $interval, orderManagementFactory){

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

  $scope.orders = [];

  const retrieveOpenOrders = () => {
    orderManagementFactory.retrieveOpenOrders()
      .then(response => {
        const orders = response.data.content.map(orderManagementFactory.orderJSONSugar);
        $scope.recentlyRequestedOrders = orders.filter(order => calcMinutesOfAge(order.timestamp) < ordersTime.RECENTLY);
        $scope.moderatelyRequestedOrders = orders.filter(order => calcMinutesOfAge(order.timestamp) < ordersTime.MODERATELY && calcMinutesOfAge(order.timestamp) >= ordersTime.RECENTLY);
        $scope.longAgoRequestedOrders = orders.filter(order => calcMinutesOfAge(order.timestamp) >= ordersTime.LONG_AGO);
      })
      .catch();
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
