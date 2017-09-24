angular.module('leMaitre').controller('AcompanharPedidoCtrl', function($scope) {
  $scope.items = [
    {
      name: 'Suco de Acerola',
      quantity: 3,
      img:
        'http://www.polpaideal.com.br/wp-content/uploads/2013/11/acerola.png',
      status: 'D',
      price: 5.9
    },
    {
      name: 'Suco de Maçã',
      quantity: 1,
      img:
        'http://armazemseuluiz.com.br/image/cache/catalog/BEBIDAS/Sucos%20PNG/Suco%20de%20Maca%20Integral%20Suco%20e%20So%201L-540x540.png',
      status: 'T',
      price: 6.8
    },
    {
      name: 'Suco de Pêssego',
      quantity: 1,
      img:
        'http://armazemseuluiz.com.br/image/cache/catalog/BEBIDAS/Sucos%20PNG/Suco%20de%20Maca%20Integral%20Suco%20e%20So%201L-540x540.png',
      status: 'R',
      price: 6.8
    }
  ];

  $scope.pricesSum = $scope.items
    .reduce((partialSum, item) => {
      return partialSum + item.quantity * item.price;
    }, 0)
    .toFixed(2);

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
});
