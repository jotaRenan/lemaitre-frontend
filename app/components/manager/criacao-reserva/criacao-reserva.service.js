angular.module('leMaitre')
.factory('createReservationFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){
  return {
    // CREATE
    makeReservation: function(reservation) {
      const res = this.reverseRerservationSyntaxSugar(reservation)
      return $http({
        method: 'POST',
        url: `${apiEndpoint}/ReservationCreate`,
        data: res
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
      badSyntax.datReservation = `${oldDate.getFullYear()}-${oldDate.getMonth()+1}-${oldDate.getDate()}`;
      const oldHour = new Date(reservation.hour);
      let hours = oldHour.getHours();
      let ampm = hours < 12 ? "AM" : "PM";
      hours = (hours % 12) || 12;
      badSyntax.datHourReservation = `${hours}:${oldHour.getMinutes()}:${oldHour.getSeconds()} ${ampm}`;
      console.log(badSyntax.datReservation);
      console.log(badSyntax.datHourReservation);
      badSyntax.nroPersons = reservation.nbrOfPeople;
      return badSyntax;
    }
  };
}]);
