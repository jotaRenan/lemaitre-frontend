angular.module('leMaitre')
.factory('reservationFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){

  const reservationBaseUrl = `${apiEndpoint}/webresources/reservation`;

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
      const res = this.reverseRerservationSyntaxSugar(reservation);
      return $http({
        method: 'POST',
        url: `${apiEndpoint}/ReservationUpdate`,
        data: res
      });
    },
    // DELETE
    cancelTableReservation: function(reservation) {
      const id = reservation.table.id,
            date = reservation.date,
            hour = reservation.hour;
      return $http({
        method: 'DELETE',
        url: `${reservationBaseUrl}`,
      });
    },
    // RETRIEVE MANY
    retrieveNextReservations: function() {
      return $http({
        method: 'GET',
        url: `${reservationBaseUrl}/`
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
        url: `${reservationBaseUrl}/${tableID}`
      });
    },

    // converts reservation json structure into a better one to be used
    reservationJSONSugar: function(badSyntax) {
      let reservation = {}, person = {}, table = {};
      table.id = badSyntax.codIDTable;
      person.name = badSyntax.txtContactName;
      person.cellphone = badSyntax.txtCellphone;
      person.telephone = badSyntax.txtTelephone;
      reservation.date = badSyntax.datReservation;
      reservation.hour = badSyntax.datHourReservation;
      reservation.nbrOfPeople = badSyntax.nroPersons;
      reservation.person = person;
      reservation.table = table;
      return reservation;
    },
    // reverts json
    reverseRerservationSyntaxSugar: function(reservation) {
      let badSyntax = {};
      badSyntax.codIDTable = reservation.table.id;
      badSyntax.txtContactName = reservation.person.name;
      badSyntax.txtCellphone = reservation.person.cellphone;
      badSyntax.txtTelephone = reservation.person.telephone;
      const oldDate = new Date(reservation.date);
      badSyntax.datReservation = `${oldDate.getFullYear()}-${oldDate.getDate()}-${oldDate.getMonth()+1}`;
      badSyntax.datHourReservation = reservation.hour;
      badSyntax.nroPersons = reservation.nbrOfPeople;
      return badSyntax;
    }
  };
}]);
