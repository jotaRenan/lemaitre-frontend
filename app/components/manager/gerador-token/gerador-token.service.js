angular.module('leMaitre')
.factory('generateTokenFactory', ['$http', function($http){
  return {
    generateToken: function(tables) {
      return $http({
        method: 'GET',
        url: ``,
        data: {tables: tables}
      });
    }
  };
}]);
