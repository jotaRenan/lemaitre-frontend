angular.module('leMaitre')
.factory('billManagementFactory', ['$http', 'apiEndpoint', '$sessionStorage', function($http, apiEndpoint, $sessionStorage){

  const billBaseURL = `${apiEndpoint}/webresources/bill`;

  return {
    //RETRIEVE BILL BY TOKEN
    retrieveBill: function(token = $sessionStorage.token) {
      return $http({
        method: 'GET',
        url: `${billBaseURL}/${token}`,
      });
    },
    // RETRIEVE ALL BILLS AND TOKENS
    retrieveAllBills: function() {
      return $http({
        method: 'GET',
        url: `${billBaseURL}`,
      });
    },
    // EDIT BILL
    editBill: function(bill) {
      return $http({
        method: 'GET',
        url: `${billBaseURL}/BillUpdate`,
        data: {codToken: bill.token, datUse: bill.date, idtStatus: bill.status}
      });
    },
    // BILL SUGAR SYNTAX
    billJSONSugar: function(badSyntax) {
      let bill = {};
      bill.token = badSyntax.codToken;
      bill.date = badSyntax.datUse;
      bill.status = badSyntax.idtStatus;
      bill.orders = badSyntax.orders;
      return bill;
    }
  };
}]);
