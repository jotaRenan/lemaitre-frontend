angular.module('leMaitre')
.factory('reservationFactory', ['$http', function($http){
  return {
    // CREATE
    makeReservation: function(reservation) {
      return $http({
        method: 'POST',
        url: ``,
        data: {reservation: reservation}
      });
    },
    // UPDATE
    editTableReservation: function(reservation) {
      return $http({
        method: 'UPDATE',
        url: ``,
        data: {reservation: reservation}
      });
    },
    // DELETE
    cancelTableReservation: function(reservation) {
      return $http({
        method: 'DELETE',
        url: ``,
        data: {reservation: reservation}
      });
    },
    // RETRIEVE MANY
    retrieveNextReservations: function() {
      return $http({
        method: 'GET',
        url: ``
      });
    },
    // RETRIEVE BY DATE
    retrieveReservationByTate: function(date) {
      return $http({
        method: 'GET',
        url: ``,
        data: {date: date}
      });
    }
  };
}]);
