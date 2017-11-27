angular.module('leMaitre')
.controller('LoginCtrl', ['$scope', 'loginManagementFactory', function($scope, loginManagementFactory){

  const exhibitError = error => {
    $scope.isLoading = false;
    alert(`Erro ${error.status || error.name}: ${error.statusText || error.message}`);
  };

  $scope.generateToken = () => {
    loginManagementFactory.generateToken()
      .then(response=> {
        if(response.data.status === 'OK') {
          $scope.generatedToken = response.data.content.codToken;
          $scope.token = $scope.generatedToken;
        } else {
          throw new Error('falha ao criar token');
        }
      })
      .catch(err => exhibitError(err));
  };

  $scope.login = () => {

  };
}]);
