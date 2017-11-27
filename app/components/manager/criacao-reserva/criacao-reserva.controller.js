angular.module('leMaitre')
.controller('CriacaoReservaCtrl', ['$scope', 'createReservationFactory', function($scope, createReservationFactory){
  // default error logging
  const exhibitError = error => {
    $scope.isLoading = false;
    alert(`Erro ${error.status}: ${error.statusText}`);
  };

  // definition of functions which call services
  $scope.makeReservation = (reservation) => {
    createReservationFactory.makeReservation(reservation)
      .then( response => {
        if (response.data.status === 'OK') {
          $scope.successMessage = `Reserva efetuada com sucesso!`
        }
      })
      .catch( error => exhibitError(error) );
  };



  //array containing objects of reservations
  $scope.reservations = [];
  // object representing a clean reservation object
  $scope.newReservation = {
    date: null,
    hour: null,
    nbrOfPeople: null,
    table: {
      id: null
    },
    person: {
      name: null,
      cellphone: null,
      telephone: null
    }
  };

}]);
