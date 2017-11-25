angular.module('leMaitre')
.factory('reservationFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){

  const tableBaseURL = `${apiEndpoint}/webresources/reservation`;

  return {
    // CREATE
    makeReservation: function(reservation) {
      return $http({
        method: 'POST',
        url: `${apiEndpoint}/ReservationCreate`,
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
      const id = reservation.table.id,
            date = reservation.date,
            hour = reservation.hour;
      return $http({
        method: 'DELETE',
        url: `${tableBaseURL}`,
      });
    },
    // RETRIEVE MANY
    retrieveNextReservations: function() {
      return $http({
        method: 'GET',
        url: `${tableBaseURL}/`
      });
    },
    // RETRIEVE BY DATE
    retrieveReservationByDate: function(date) {
      return $http({
        method: 'GET',
        url: `${apiEndpoint}/`,
        data: {date: date}
      });
    },
    // RETRIEVE BY TABLE ID
    retrieveReservationByTableID: function(tableID) {
      return $http({
        method: 'GET',
        url: `${apiEndpoint}/${tableID}`
      });
    },

    // converts reservation json structure into a better one to be used
    reservationJSONSugar: function(badSyntax) {
      let reservation, person, table;
      table.id = badSyntax.codIDTable;
      person.name = badSyntax.txtContactName;
      person.cellphone = badSyntax.txtCellphone;
      person.telephone = badSyntax.txtTelephone;
      reservation.date = badSyntax.datReservation;
      reservation.hour = badSyntax.darHourReservation;
      reservation.nbrOfPeople = badSyntax.nroPersons;
      reservation.person = person;
      reservation.table = table;
      return reservation;
    }
  };
}]);
