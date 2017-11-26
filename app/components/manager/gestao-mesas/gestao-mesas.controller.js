angular.module('leMaitre')
.controller('GestaoMesasCtrl', ['$scope', '$state', 'tableManagementFactory', 'reservationFactory', 'categoryManagementFactory', 'itemManagementFactory', 'subcategoryManagementFactory', 'orderManagementFactory', function($scope, $state, tableManagementFactory, reservationFactory, categoryManagementFactory, itemManagementFactory, subcategoryManagementFactory, orderManagementFactory){

  const retrieveTableStatus = (tableId) => {
    tableManagementFactory.retrieveStatus(tableId)
      .then( response => {
        $scope.isLoading = false;
        $scope.tableBeingViewed = tableManagementFactory.tableJSONSugar(response.data.content);
      })
      .catch( error => exhibitError(error) );
  };

  const retrieveTablesGeneralStatus = () => {
    tableManagementFactory.retrieveTablesGeneralStatus()
      .then ( response => {
        $scope.isLoading = false;
        $scope.tables = response.data.content.map(tableManagementFactory.tableJSONSugar);
      })
      .catch( error => exhibitError(error) );
  };

  const retrieveReservationByTableID = (tableID) => {
    reservationFactory.retrieveReservationByTableID(tableID)
      .then( response => {
        $scope.isLoading = false;
        const reservations = response.data.content
          .map(reservationFactory.reservationJSONSugar)
          .map(reservation => {
            delete reservation.table.id; // unnecessary attribute, since the reservation object is nested inside a table object
            return reservation;
          });
        $scope.tableBeingViewed.reservations = reservations;
      })
      .catch( error => exhibitError(error) );
  };

  const insertTable = (table) => {
    tableManagementFactory.insertTable(table)
      .then ( response => {
        $scope.isLoading = false;
      })
      .catch( error => exhibitError(error) );
  };

  const exhibitError = error => {
    $scope.isLoading = false;
    alert(`Erro ${error.status}: ${error.statusText}`);
  };

  const retrieveCategories = () => {
    $scope.isLoading = true;
    categoryManagementFactory.retrieveCategories()
      .then( response => {
        $scope.isLoading = false;
        $scope.categories = response.data.content.map(categoryManagementFactory.categoryJSONSyntaxSugar);
      })
      .catch( error => exhibitError(error) );
  };

  const retrieveSubcategoryItems = (categoryID, subcategoryID) => {
    subcategoryManagementFactory.retrieveSubcategoryItems(categoryID, subcategoryID)
      .then(response => {
        $scope.subcategories = response.data.content.map(subcategoryManagementFactory.subcategoryJSONSyntaxSugar); // TODO: implement this sugar
      })
      .catch( error => exhibitError(error) );
  };

  $scope.tableBeingViewed = {};

  $scope.getTableStatusClass = (status) => {
    switch (status) {
      case 'O': //occupied
      case 'o':
        return 'red';
      case 'R': //reserved
      case 'r': //reserved
        return 'orange';
      case 'F': //free
      case 'f':
        return 'green';
      }
  };

  $scope.openTableStatus = (table) => {
    $scope.isCategoryMenuBeingExhibited = true;
    $scope.isSeeOrderActivated = false;
    $scope.itemsBeingOrdered = [];
    $scope.tableBeingViewed = table;
    if (table.status === 'R' || 'r' === table.status){
      retrieveReservationByTableID(table.id);
    }
  };

  $scope.requestBill = (tableId) => {
    tableManagementFactory.requestBill(tableId)
      .then(data => {
        // TODO: normal flux
      })
      .catch(error => exhibitError(error));
  };

  $scope.editReservations = () => {
    $state.go('edicao-reserva');
  };

  $scope.exhibitItems = (category) => {
    $scope.isLoading = true;
    $scope.isCategoryMenuBeingExhibited = false;
    categoryManagementFactory.getItemsFromCategory(category.id)
      .then( response => {
        $scope.isLoading = false;
        $scope.items = response.data.content.map(itemManagementFactory.itemJSONSyntaxSugar);
      })
      .catch(error => exhibitError(error));
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

  $scope.removeItemFromOrder = (item) => {
    $scope.isSeeOrderActivated = $scope.itemsBeingOrdered.length !== 0;
    if (!$scope.itemsBeingOrdered.includes(item)) {
      return;
    }
    const index = $scope.itemsBeingOrdered.findIndex(itemInside => itemInside.id === item.id);
    if ($scope.itemsBeingOrdered[index].quantity === 1) {
      $scope.itemsBeingOrdered.splice(index, 1);
    } else {
      $scope.itemsBeingOrdered[index].quantity--;
    }
  };

  $scope.placeOrder = (order) => {
    orderManagementFactory.placeOrder(order)
      .then(response => {
        alert(response.data.content);
      })
      .catch(error => exhibitError(error));
  };

  // BEGINS EXECUTION
  retrieveTablesGeneralStatus();
  retrieveCategories();
  $scope.isCategoryMenuBeingExhibited = true;
}]);
