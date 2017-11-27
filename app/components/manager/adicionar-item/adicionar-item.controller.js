angular.module('leMaitre')
.controller('AddItemCtrl',['$scope', '$http', '$state', 'categoryManagementFactory', 'subcategoryManagementFactory', 'itemManagementFactory', function($scope, $http, $state, categoryManagementFactory, subcategoryManagementFactory, itemManagementFactory){

  $scope.item = {};

  const resetItem = () => {
    $scope.item = {
      name: undefined,
      picture: undefined,
      price: undefined,
      description: undefined,
      isAvailable: undefined,
      category: {
        id: undefined,
        subcategory: {
          id: undefined
        }
      },
    };
  };

  const exhibitError = error => {
    $scope.isLoading = false;
    alert(`Erro ${error.status || error.name}: ${error.statusText || error.message}`);
  };

  $scope.insertItem = (item) => {
    itemManagementFactory.insertItem(item)
      .then( response => {
        if (response.data.status === 'OK') {
          const itemName = response.data.content.nomItem;
          resetItem();
          $scope.successMessage = `Item '${itemName}'' adicionado com sucesso!`;
        }
      })
      .catch(err => exhibitError(err));
  };

  $scope.cancel = () => {
    resetItem();
    $state.go('home');
  };

  $scope.categories = [];

   const retrieveCategories = () => {
    categoryManagementFactory.retrieveCategories()
      .then( response => {
        const categories = response.data.content.map(categoryManagementFactory.categoryJSONSyntaxSugar);
        categories.map(retrieveSubcategories);
        $scope.categories.push(...categories);
      })
      .catch( error => exhibitError(error) );
  };

  const allSubcategories = [];

  const retrieveSubcategories = (category) => {
    categoryManagementFactory.getSubcategoriesFromCategory(category.id)
      .then( response => {
        const subcategories = response.data.content
          .map(subcategoryManagementFactory.subcategoryJSONSyntaxSugar)
          .map(sub => {
            sub.parentCategory = {id: category.id};
            return sub;
          });
        allSubcategories.push(...subcategories);
      })
      .catch( error => exhibitError(error) );
  };

  $scope.updateSubcategories = (category) => {
    $scope.subcategoriesExhibited = allSubcategories.filter(sub => sub.parentCategory.id === category);
  };

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
  //BEGIN EXECUTION
  resetItem();
  retrieveCategories();
}]);
