angular.module('leMaitre')
.controller('FinalizarPedidoCtrl', ['$scope', 'orderManagementFactory', 'billManagementFactory', 'itemManagementFactory', function($scope, orderManagementFactory, billManagementFactory, itemManagementFactory){

  $scope.payTip = true;

  const  TAXES_PERCENTAGE = 0.1;
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
        $scope.total = bill.price;
        $scope.taxes = TAXES_PERCENTAGE * $scope.total;
      })
      .catch(error => exhibitError(error));
  };

  //
  retrieveBill();
}]);
