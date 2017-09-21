angular.module('leMaitre')
.controller('AddItemCtrl',['$scope', '$http', function($scope, $http){

  $scope.item = {};

  $scope.register = () => {
    $http({
      method: 'GET',
      url: ``,
      data: {name: name, picture: picture, price: price, description: description}  = $scope.item
    });
  };
  
}]);
