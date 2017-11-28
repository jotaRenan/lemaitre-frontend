angular.module('leMaitre')
.controller('CardapioCtrl', ['$scope', 'categoryManagementFactory', 'subcategoryManagementFactory', 'itemManagementFactory',
function($scope, categoryManagementFactory, subcategoryManagementFactory, itemManagementFactory){

  $scope.menu = [];

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

  const exhibitError = error => {
    alert(`Erro ${error.status || error.name}: ${error.statusText || error.message}`);
  };

  const retrieveCategories = () => {
    categoryManagementFactory.retrieveCategories()
      .then( response => {
        const categories = response.data.content.map(categoryManagementFactory.categoryJSONSyntaxSugar);
        categories.map(retrieveSubcategories);
        $scope.menu.push(...categories);
      })
      .catch( error => exhibitError(error) );
  };

  const retrieveSubcategories = (category) => {
    categoryManagementFactory.getSubcategoriesFromCategory(category.id)
      .then( response => {
        const subcategories = response.data.content.map(subcategoryManagementFactory.subcategoryJSONSyntaxSugar);
        category.subcategories = [...subcategories];
        subcategories.map(subcat => retrieveItemsFromSubcategory(subcat));
      })
      .catch( error => exhibitError(error) );
  };

  const retrieveItemsFromSubcategory = (subcategory) => {
    categoryManagementFactory.getItemsFromSubcategory(subcategory.id)
      .then( response => {
        const items =  response.data.content.map(itemManagementFactory.itemJSONSyntaxSugar);
        subcategory.items = [...items];
      })
      .catch(error => exhibitError(error));
  };

  $scope.tst = () => {
    console.table($scope.menu);
  };

  $scope.showItems = (category) => {
    document.querySelector(`.category-${category}`).classList.toggle('not-displayed');
  };

  retrieveCategories();

}]);
