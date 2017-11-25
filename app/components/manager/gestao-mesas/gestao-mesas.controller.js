angular.module('leMaitre')
.controller('GestaoMesasCtrl', ['$scope', '$state', 'tableManagementFactory', 'reservationFactory', 'categoryManagementFactory', 'itemManagementFactory', 'subcategoryManagementFactory', function($scope, $state, tableManagementFactory, reservationFactory, categoryManagementFactory, itemManagementFactory, subcategoryManagementFactory){

  const retrieveTableStatus = (tableId) => {
    tableManagementFactory.retrieveStatus(tableId)
      .then( response => {
        $scope.isLoading = false;
        $scope.tableBeingViewed = tableJSONSugar(response.data.content);
      })
      .catch( error => exhibitError(error) );
  };

  const retrieveTablesGeneralStatus = () => {
    tableManagementFactory.retrieveTablesGeneralStatus()
      .then ( response => {
        $scope.isLoading = false;
        $scope.tables = response.data.content.map(tableJSONSugar);
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
  const tableJSONSugar = (oldTable) => {
    let newTable = {};
    newTable.status = oldTable.idtStatus;
    newTable.id = oldTable.codID;
    newTable.nbrOfSeats = oldTable.nroSeat;
    return newTable;
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
  // BEGINS EXECUTION
  retrieveTablesGeneralStatus();
  retrieveCategories();
  $scope.isCategoryMenuBeingExhibited = true;
}]);
