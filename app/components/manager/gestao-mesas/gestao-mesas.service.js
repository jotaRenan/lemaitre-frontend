angular.module('leMaitre')
.factory('tableManagementFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){

  const tableBaseURL = `${apiEndpoint}/webresources/table`;

  return {
    // RETRIEVE TOKEN BY TABLE ID
    retrieveToken: function(tableId) {
      return $http({
        method: 'GET',
        url: `${apiEndpoint}/webresources/billTable/table/${tableId}`,
      });
    },
    // SERVICES RELATED TO TABLES' STATUS
    retrieveStatus: function(tableId) {
      return $http({
        method: 'GET',
        url: `${tableBaseURL}/${tableId}`,
      });
    },

    retrieveTablesGeneralStatus: function() {
      return $http({
        method: 'GET',
        url: `${tableBaseURL}`
      });
    },

    // SERVICES RELATED TO TABLE CRUD
    deleteTable: function(tableId) {
      return $http({
        method: 'DELETE',
        url: `${tableBaseURL}/${tableId}`
      });
    },

    insertTable: function(table) {
      return $http({
        method: 'POST',
        url: `${apiEndpoint}/TableCreate}`,
        data: {codID: table.id, idtStatus: table.status, nroSeat: table.seats}
      });
    },

    // SERVICES RELATED TO A BILL
    requestBill: function(tableId) {
      return $http({
        method: 'GET',
        url: `${apiEndpoint}`,
        data: {tableId: tableId}
      });
    },

    tableJSONSugar: function(badSyntax) {
      let table = {};
      table.status = badSyntax.idtStatus;
      table.id = badSyntax.codID;
      table.nbrOfSeats = badSyntax.nroSeat;
      return table;
    }

  };
}]);
