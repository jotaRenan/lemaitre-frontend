angular.module('leMaitre')
.controller('GestaoMesasCtrl', ['$scope', 'tableManagementFactory', function($scope, tableManagementFactory){

  const retrieveTableStatus = (tableId) => {
    tableManagementFactory.retrieveStatus(tableId)
      .then( data => {
        $scope.isLoading = false;
        $scope.tableBeingViewed = data;
      })
      .catch( error => {
        $scope.isLoading = false;
        alert(`Erro: ${error}`);
      });
  };

  $scope.tableBeingViewed = {};

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
    retrieveStatus(tableId);
    // TODO: open modal which shows the clicked table's status
    document.querySelector('.table-info').classList.add('displayed');
  };

  $scope.closeTableInfo = () => {
    document.querySelector('.table-info').classList.remove('displayed');
  }

}]);
