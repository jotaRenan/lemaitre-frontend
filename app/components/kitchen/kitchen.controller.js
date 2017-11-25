angular.module('leMaitre-kitchen')
.controller('KitchenCtrl', function($scope){

  let orders;
  const ordersTime = {
    RECENTLY: 5,
    MODERATELY: 20,
    LONG_AGO: 35,
  };

  /*
  const groupOrdersByTime = (orders, time) => {
    orders.reduce( (accumulator, order) => {
      if (order.hourOrder < time) {
        return accumulator.push(order.items);
      }
    }, []);
  };
  */

  $scope.recentlyRequestedOrders = orders.filter(order => order.datHour < ordersTime.RECENTLY);
  $scope.moderatelyRequestedOrders = orders.filter(order => order.datHour < ordersTime.MODERATELY);
  $scope.longAgoRequestedOrders = orders.filter(order => order.datHour >= ordersTime.LONG_AGO);

  $scope.getItemStatusCSSClass = status => {
    switch (status) {
      case 'T': //todo
        return 'ultra-red';
      case 'D': //doing
        return 'orange';
      case 'R': //ready
        return 'lightgreen';
    }
  };
});
