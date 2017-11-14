angular.module('leMaitre')
.controller('GestaoMesasCtrl', ['$scope', 'tableManagementFactory', function($scope, tableManagementFactory){

  const retrieveTableStatus = (tableId) => {
    tableManagementFactory.retrieveStatus(tableId)
      .then( data => {
        $scope.isLoading = false;
        $scope.tableBeingViewedStatus = data;
      })
      .catch( error => {
        $scope.isLoading = false;
        alert(`Erro: ${error}`);
      });
  };

  $scope.tableBeingViewedStatus = {};

  $scope.tables = [
    {
      id: undefined,
      status: undefined,
      seats: undefined
    },
    {
      id: undefined,
      status: undefined,
      seats: undefined
    },
  ];

  $scope.getTableStatusClass = (status) => {
    switch (status) {
      case 'O': //occupied
        return 'red';
      case 'R': //reserved
        return 'orange';
        case 'F': //free
        return 'green';
      }
  };

  $scope.openTableStatus = (tableId) => {
    $scope.isLoading = true;
    // TODO: open modal which shows the clicked table's status
  };

}]);
