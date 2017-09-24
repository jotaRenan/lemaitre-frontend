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
  
/*TODO
$scope.showItems = () => {
  let a = document.querySelector(".categoria-cardapio").childNodes;
  console.log(a[4]);
  a[4].classList.toggle("show-items");
}
*/
});
