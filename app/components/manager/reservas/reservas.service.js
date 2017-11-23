angular.module('leMaitre')
.factory('reservationFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){
  return {
    // CREATE
    makeReservation: function(reservation) {
      return $http({
        method: 'POST',
        url: `${apiEndpoint}/`,
        data: {reservation: reservation}
      });
    },
    // UPDATE
    editTableReservation: function(reservation) {
      return $http({
        method: 'UPDATE',
        url: `${apiEndpoint}/`,
        data: {reservation: reservation}
      });
    },
    // DELETE
    cancelTableReservation: function(reservation) {
      return $http({
        method: 'DELETE',
        url: `${apiEndpoint}/`,
        data: {reservation: reservation}
      });
    },
    // RETRIEVE MANY
    retrieveNextReservations: function() {
      return $http({
        method: 'GET',
        url: `${apiEndpoint}/`
      });
    },
    // RETRIEVE BY DATE
    retrieveReservationByTate: function(date) {
      return $http({
        method: 'GET',
        url: `${apiEndpoint}/`,
        data: {date: date}
      });
    }
  };
}]);
