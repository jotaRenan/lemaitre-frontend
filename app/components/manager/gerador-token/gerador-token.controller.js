angular.module('leMaitre')
.controller('generateTokenCtrl', ['$scope', 'generateTokenFactory', function($scope, generateTokenFactory) {

  $scope.tokens = [];

  const gerarToken = (tables) => {
    generateTokenFactory.generateToken(tables)
      .success( data => {
        // expecting data to be an array of tokens
        $scope.tokens = data;
      });
  };

  $scope.gerarTokens = () => gerarToken($scope.tables);
  $scope.regexPattern = '[0-9 ]+';
}]);
