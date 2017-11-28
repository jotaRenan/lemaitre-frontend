angular.module('leMaitre')
.controller('LoginCtrl', ['$timeout','$scope', '$sessionStorage', 'loginManagementFactory', 'tokenManagementFactory', 'billManagementFactory', '$state', function($timeout, $scope, $sessionStorage, loginManagementFactory, tokenManagementFactory, billManagementFactory, $state){
  const rightUser = 'manager';
  const rightPass = '123';

  $scope.$storage = $sessionStorage;

  const exhibitError = error => {
    $scope.isLoading = false;
    alert(`Erro ${error.status || error.name}: ${error.statusText || error.message}`);
  };

  $scope.generateToken = () => {
    tokenManagementFactory.generateToken()
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

  $scope.login = (user) => {
    $scope.loading = true;
    $scope.loginMessage = '';
    $timeout( () => {
      $scope.loading = false;
      if ($scope.user.username === rightUser && $scope.user.password === rightPass) {
        $scope.$storage.isManager = true;
        $scope.$storage.isLogged = true;
        $scope.loginMessage = 'Login feito com sucesso';
        $('#workerLogin').modal('hide');
      } else {
        $scope.loginMessage = 'Login invalido';
      }
      resetUser();
    }, 800);
  };
  const resetUser = () => {
    $scope.user = {
      username: '',
      password: ''
    };
  };

  $scope.checkToken = (token) => {
    billManagementFactory.retrieveAllBills()
      .then( response => {
        const tokenMatches = response.data.content
          .map(billManagementFactory.billJSONSugar)
          .find(bill => bill.token === token);
        if (tokenMatches) {
          $scope.$storage.isLogged = true;
          $scope.$storage.token = token;
          $state.go('cardapio');
        } else {
          throw new Error('token doesnt match');
        }
      })
      .catch(err => exhibitError(err));
  };

  // Begin execution
  resetUser();
}]);
