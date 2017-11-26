angular.module('leMaitre')
.factory('billManagementFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){

  const billBaseURL = `${apiEndpoint}/webresources/bill`;

  return {
    //RETRIEVE BILL BY TOKEN
    retrieveBill: function(token) {
      return $http({
        method: 'GET',
        url: `${billBaseURL}/${token}`,
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
