angular.module('leMaitre')
.controller('GestaoMesasCtrl', ['$scope', 'tableManagementFactory', function($scope, tableManagementFactory){

  const retrieveTableStatus = (tableId) => {
    tableManagementFactory.retrieveStatus(tableId)
      .then( data => {
        $scope.isLoading = false;
        $scope.tableBeingViewed = data;
      })
      .catch( error => exhibitError(error) );
  };

  const retrieveTablesGeneralStatus = () => {
    tableManagementFactory.retrieveTablesGeneralStatus()
      .then ( data => {
        $scope.isLoading = false;
        $scope.tables = data;
      })
      .catch( error => exhibitError(error) );
  };

  const exhibitError = error => {
    $scope.isLoading = false;
    alert(`Erro ${error.status}: ${error.statusText}`);
  };

  $scope.tableBeingViewed = {};

  $scope.tables = [
    {
      id: undefined,
      status: 'R',
      seats: undefined
    },
    {
      id: undefined,
      status: 'F',
      seats: undefined
    },
  ];

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

  $scope.openTableStatus = (tableId) => {
    $scope.isLoading = true;
    retrieveTableStatus(tableId);
  };

  $scope.reserveTable = (reservation) => {
    tableManagementFactory.reserveTable(reservation)
      .then(data => {
        // TODO: normal flux
      })
      .catch(error => exhibitError(error));
  };

  $scope.editTableReservation = (reservation) => {
    tableManagementFactory.editTableReservation(reservation)
      .then(data => {
        // TODO: normal flux
      })
      .catch(error => exhibitError(error));
  };

  $scope.cancelTableReservation = (reservation) => {
    tableManagementFactory.cancelTableReservation(reservation)
      .then(data => {
        // TODO: normal flux
      })
      .catch(error => exhibitError(error));
  };

  $scope.requestBill = (tableId) => {
    tableManagementFactory.requestBill(tableId)
      .then(data => {
        // TODO: normal flux
      })
      .catch(error => exhibitError(error));
  };

}]);
