angular.module('leMaitre')
.factory('tableManagementFactory', ['$http', function($http){
  return {
    retrieveStatus: function(tableId) {
      return $http({
        method: 'GET',
        url: ``,
        data: {tableId: tableId}
      });
    }
  };
}]);
