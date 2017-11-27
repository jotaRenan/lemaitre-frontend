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
      .then( response => {
        console.log(response.data.content.map(reservationFactory.reverseRerservationSyntaxSugar)); 
      }) 
      .catch( error => exhibitError(error) );
  };
  const cancelTableReservation = reservation => {
    reservationFactory.cancelTableReservation(reservation)
      .then() //todo
      .catch( error => exhibitError(error) );
  };
  const retrieveNextReservations = () => {
    reservationFactory.retrieveNextReservations()
      .then( response => {
        $scope.reservations = response.data.content.map(reservationFactory.reservationJSONSugar);
      }) 
      .catch( error => exhibitError(error) );
  };
  const retrieveReservationByTableID = (tableId) => {
    reservationFactory.retrieveReservationByTableID()
      .then() // todo
      .catch( error => exhibitError(error) );
  };
  const retrieveReservationByDate = (date) => {
    reservationFactory.retrieveReservationByDate(date)
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
    nbrOfPeople: null,
    table: {
      id: null
    },
    person: {
      telephone: null,
      cellphone: null,
      phone: null,
    }
  };

  $scope.exhibitReservation = (reservation) => {
    $scope.reservationBeingViewed = reservation;
  };
  // exposes functions to scope
  $scope.cancelTableReservation = cancelTableReservation;
  $scope.makeReservation = makeReservation;
  $scope.editTableReservation = editTableReservation;
  $scope.retrieveNextReservations = retrieveNextReservations;
  $scope.retrieveReservationByDate = retrieveReservationByDate;
  $scope.retrieveReservationByTableID = retrieveReservationByTableID;

  //BEGINS EXECUTION 
  retrieveNextReservations();
}]);
