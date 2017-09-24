angular.module('leMaitre')
.controller('AddItemCtrl',['$scope', '$http', '$state', function($scope, $http, $state){

  $scope.item = {
    name: undefined,
    picture: undefined,
    price: undefined,
    description: undefined,
    category: undefined,
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

  $scope.categories = [
    {name: 'bebidas', id: 1, subcategory: {name: 'refrigerantes', id: 1100} },
    {name: 'bebidas', id: 1, subcategory: {name: 'champagnes', id: 1101} },
    {name: 'hamburgueres', id: 2, subcategory: {name: 'veganos', id: 2100} },
  ];

  $scope.categoriesDONTUSETHISSTRUCTURE = [
    {
      name: 'bebidas',
      id: 1,
      subcategories: [
        {
          name: 'refrigerantes',
          id: 1100,
        },
        {
          name: 'champagnes',
          id: 1101,
        }
      ]
    },
    {
      name: 'hamburgueres',
      id: 2,
      subcategories: [
        {
          name: 'cheeseburguers',
          id: 2100,
        },
        {
          name: 'vegan',
          id: 2101,
        }
      ]
    }
  ];

}]);
