angular.module('leMaitre')
.factory('tableManagementFactory', ['$http', function($http){
  return {
    retrieveStatus: function(tableId) {
      return $http({
        method: 'GET',
        url: ``,
        data: {tableId: tableId}
      });
    },

    //SERVICES RELATED TO RESERVATIONS
    reserveTable: function(reservation) {
      return $http({
        method: 'POST',
        url: ``,
        data: {reservation: reservation}
      });
    },

    editTableReservation: function(reservation) {
      return $http({
        method: 'UPDATE',
        url: ``,
        data: {reservation: reservation}
      });
    },

    cancelTableReservation: function(reservation) {
      return $http({
        method: 'DELETE',
        url: ``,
        data: {reservation: reservation}
      });
    },

    // SERVICES RELATED TO A BILL
    requestBill: function(tableId) {
      return $http({
        method: 'GET',
        url: ``,
        data: {tableId: tableId}
      });
    },

    retrieveTablesGeneralStatus: function() {
      return $http({
        method: 'GET',
        url: ``
      });
    }
  };
}]);
