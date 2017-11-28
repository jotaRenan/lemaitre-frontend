angular.module('leMaitre')
.controller('CardapioCtrl', ['$scope', 'categoryManagementFactory', 'subcategoryManagementFactory', 'itemManagementFactory','orderManagementFactory', '$sessionStorage',
function($scope, categoryManagementFactory, subcategoryManagementFactory, itemManagementFactory, orderManagementFactory, $sessionStorage){

  $scope.menu = [];
  $scope.$storage = $sessionStorage;
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

  $scope.showSubcategories = (category) => {
    document.querySelector(`.category-${category}`).classList.toggle('not-displayed');
  };

  $scope.showItems = (subcategory) => {
    document.querySelector(`.subcategory-${subcategory}`).classList.toggle('not-displayed');
  };

  // array of items
  $scope.itemsBeingOrdered = [];

  $scope.orderItem = (item) => {
    $scope.isSeeOrderActivated = true;
    if (!$scope.itemsBeingOrdered.includes(item)) {
      item.quantity = 1;
      $scope.itemsBeingOrdered.push(item);
    } else {
      const index = $scope.itemsBeingOrdered.findIndex(itemInside => itemInside.id === item.id);
      $scope.itemsBeingOrdered[index].quantity++;
    }
  };

  $scope.placeOrder = (order) => {
    $scope.afterPlacementMessage = 'Carregando...';
    orderManagementFactory.placeOrder(order)
      .then(response => {
        $scope.itemsBeingOrdered = [];
        $scope.afterPlacementMessage = 'Pedido efetuado!';
      })
      .catch(error => exhibitError(error));
  };

  retrieveCategories();

}]);
