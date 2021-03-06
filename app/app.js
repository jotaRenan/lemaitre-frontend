angular.module("leMaitre", ["ui.router", 'xeditable', 'angular.filter', 'ngStorage']).config(function($locationProvider, $urlRouterProvider, $stateProvider){
    $stateProvider
    	// Rota para a página Login
	    .state('home', {
	      url: '/',
	      templateUrl: 'app/components/shared/login/login.html',
        controller: 'LoginCtrl',
	    })
	    //Rota para a página Acompanhar Pedido
	    .state('acompanhar-pedido', {
	      url: '/acompanhar-pedido',
	      templateUrl: 'app/components/client/acompanhar-pedido/acompanhar-pedido.html',
        controller: 'AcompanharPedidoCtrl',
	    })
      //Rota para a página Cardápio
	    .state('cardapio', {
	      url: '/cardapio',
	      templateUrl: 'app/components/client/cardapio/cardapio.html',
        controller: 'CardapioCtrl',
	    })
	    //Rota para a página Finalizar Pedido
	    .state('finalizar-pedido', {
	      url: '/finalizar-pedido',
	      templateUrl: 'app/components/client/finalizar-pedido/finalizar-pedido.html',
        controller: 'FinalizarPedidoCtrl',
	    })
	    //Rota para a página Cozinha
	    .state('kitchen', {
	      url: '/kitchen',
	      templateUrl: 'app/components/kitchen/index.html',
        controller: 'KitchenCtrl',
	    })
      //Rota para a página Adicionar Item
	    .state('adicionar-item', {
	      url: '/adicionar-item',
	      templateUrl: 'app/components/manager/adicionar-item/adicionar-item.html',
        controller: 'AddItemCtrl',
	    })
	    //Rota para a página Criação de Reserva
	    .state('criacao-reserva', {
	      url: '/criacao-reserva',
	      templateUrl: 'app/components/manager/criacao-reserva/criacao-reserva.html',
        controller: 'CriacaoReservaCtrl',
	    })
	    //Rota para a página Gerador de Tokens
	    .state('gerador-token', {
	      url: '/gerador-token',
	      templateUrl: 'app/components/manager/gerador-token/gerador-token.html',
        controller: 'generateTokenCtrl',
	    })
	    //Rota para a página Gestão de Mesas
	    .state('gestao-mesas', {
	      url: '/gestao-mesas',
	      templateUrl: 'app/components/manager/gestao-mesas/gestao-mesas.html',
        controller: 'GestaoMesasCtrl',
	    })
	    //Rota para a página Status: Mesa Livre
	    .state('status-mesa-livre', {
	      url: '/status-mesa-livre',
	      templateUrl: 'app/components/manager/status-mesa-livre/status-mesa-livre.html',
        controller: 'StatusMesaLivreCtrl',
	    })
	    //Rota para a página Status: Mesa Ocupada
	    .state('status-mesa-ocupada', {
	      url: '/status-mesa-ocupada',
	      templateUrl: 'app/components/manager/status-mesa-ocupada/status-mesa-ocupada.html',
        controller: 'StatusMesaOcupadaCtrl',
	    })
	    //Rota para a página Status: Mesa Reservada
	    .state('status-mesa-reservada', {
	      url: '/status-mesa-reservada',
	      templateUrl: 'app/components/manager/status-mesa-reservada/status-mesa-reservada.html',
        controller: 'StatusMesaReservadaCtrl',
	    })
      .state('reservas', {
	      url: '/reservas',
	      templateUrl: 'app/components/manager/reservas/reservas.html',
        controller: 'ReservationsCtrl',
	    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});

angular.module('leMaitre').constant('apiEndpoint',  'http://localhost:8080/LeMaitreWebApplication');
