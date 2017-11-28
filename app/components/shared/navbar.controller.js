angular.module('leMaitre')
.controller('navbarCtrl', ['$scope', '$sessionStorage', '$state', function( $scope, $sessionStorage, $state){
  $scope.$storage = $sessionStorage;
  $scope.isManager = $scope.$storage.isManager;
  $scope.test = false;

  $scope.logout = () => {
    $scope.$storage.isManager = false;
    $scope.$storage.isLogged = false;
    $state.go('home');
  };

}]);
