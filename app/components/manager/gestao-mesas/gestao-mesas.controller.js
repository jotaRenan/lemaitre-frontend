angular.module('leMaitre')
.controller('GestaoMesasCtrl', function($scope){
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
    // TODO logic
  }

});
