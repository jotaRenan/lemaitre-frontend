angular.module('leMaitre').controller('AcompanharPedidoCtrl', ['$scope', 'orderManagementFactory', 'billManagementFactory', 'itemManagementFactory',
 function($scope, orderManagementFactory, billManagementFactory, itemManagementFactory) {

  const exhibitError = error => {
    $scope.isLoading = false;
    alert(`Erro ${error.status || error.name}: ${error.statusText || error.message}`);
  };

  const retrieveBill = (token) => {
    billManagementFactory.retrieveBill(token)
      .then( response => {
        const bill = billManagementFactory.billJSONSugar(response.data.content);
        bill.orders = bill.orders.map(orderManagementFactory.orderJSONSugar);
        bill.orders.forEach(order => {
          order.item = itemManagementFactory.itemJSONSyntaxSugar(order.item);
          order.item.quantity = order.quantity;
        });
        $scope.items = bill.orders.reduce( (arr, order) => {
          arr.push(order.item);
          return arr;
        }, []);
        bill.price = bill.orders.reduce( (total, order) => total + order.price, 0);
        $scope.bill = bill;
      })
      .catch(error => exhibitError(error));
  };

  $scope.getCircleStatusClass = status => {
    switch (status) {
      case 'T': //todo
        return 'red';
      case 'D': //doing
        return 'orange';
      case 'R': //ready
        return 'green';
    }
  };

  retrieveBill('teste4321');
}]);
