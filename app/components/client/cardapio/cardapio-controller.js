angular.module('leMaitre')
.controller('CardapioCtrl', function($scope){

$scope.categorias = [
  {
    name: 'bebidas',
    items: [{
      name: 'Suco de Acerola',
      price: 5.90,
    },
    {
      name: 'Suco de Maçã',
      price: 6.80,
    },
    {
      name: 'Suco de Pêssego',
      price: 6.80,
    }],
  }];
/* TODO
$scope.showItems = () => {
  document.querySelector()
}
*/
});
