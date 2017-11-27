angular.module('leMaitre')
.factory('tokenManagementFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){
  return {
    generateToken: function() {
      return $http({
        method: 'POST',
        url: `${apiEndpoint}/BillCreate`,
      });
    },

    associateTableToToken: function(tableID, token) {
      return $http({
        method: 'POST',
        url: `${apiEndpoint}/BillTableCreate`,
        data: {codIDBill: token, codIDTable: tableID}
      });
    }
  };

}]);
