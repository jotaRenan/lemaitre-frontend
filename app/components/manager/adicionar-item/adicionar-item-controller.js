angular.module('leMaitre')
.controller('AddItemCtrl',['$scope', '$http', '$state', function($scope, $http, $state){

  $scope.item = {
    name: undefined,
    picture: undefined,
    price: undefined,
    description: undefined,
  };

  $scope.register = () => {
    const {name: name, picture: picture, price: price, description: description}  = $scope.item;
    $http({
      method: 'GET',
      // TODO: define servlet url
      url: ``,
      data: {name: name, picture: picture, price: price, description: description},
    })
      .then(response => {
        alert(`Item ${name} adicionado!`);
      })
      .catch(response => {
        alert(`Erro ${response.status}: ${response.statusText}`);
      });
  };

  $scope.cancel = () => {
    $state.go('home');
  };

}]);
