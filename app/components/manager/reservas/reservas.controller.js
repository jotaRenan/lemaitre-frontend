angular.module('leMaitre')
.controller('ReservationsCtrl', ['$scope', 'reservationFactory', function($scope, reservationFactory){

  // default error logging
  const exhibitError = error => {
    $scope.isLoading = false;
    alert(`Erro ${error.status}: ${error.statusText}`);
  };

  // definition of functions which call services
  const makeReservation = reservation => {
    reservationFactory.makeReservation(reservation)
      .then() //todo
      .catch( error => exhibitError(error) );
  };
  const editTableReservation = reservation => {
    reservationFactory.editTableReservation(reservation)
      .then() //todo
      .catch( error => exhibitError(error) );
  };
  const cancelTableReservation = reservation => {
    reservationFactory.cancelTableReservation(reservation)
      .then() //todo
      .catch( error => exhibitError(error) );
  };
  const retrieveNextReservations = () => {
    reservationFactory.retrieveNextReservations()
      .then() //todo
      .catch( error => exhibitError(error) );
  };
  const retrieveReservationByTate = (date) => {
    reservationFactory.retrieveReservationByTate(date)
      .then() //todo
      .catch( error => exhibitError(error) );
  };

  //array containing objects of reservations
  $scope.reservations = [];
  // reservation to be displayed on a modal
  $scope.reservationBeingViewed = {};
  // object representing a clean reservation object
  $scope.newReservation = {
    date: null,
    hour: null,
    nroPersons: null,
    table: {
      id: null
    },
    person: {
      name: null,
      phone: null,
    }
  };
}]);
