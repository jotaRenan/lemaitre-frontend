angular.module('leMaitre')
.controller('CardapioCtrl', function($scope){

  $scope.categorias = [
    {
      name: 'bebidas',
      items: [
        {
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
        }
      ],
    },
    {
      name: 'drinks',
      items: [
        {
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
        }
      ],
    },
  ];

  $scope.showItems = (categoria) => {
    document.querySelector(`.category-${categoria}`).classList.toggle('not-displayed');
  }

});
