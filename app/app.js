angular.module("leMaitre", ["ui.router"]).config(function($locationProvider, $urlRouterProvider, $stateProvider){
    $stateProvider
    	// Rota para a página Login
	    .state('home', {
	      url: '/',
	      templateUrl: 'app/components/shared/login.html',
	    })
	    //Rota para a página Acompanhar Pedido
	    .state('acompanhar-pedido', {
	      url: '/acompanhar-pedido',
	      templateUrl: 'app/components/client/acompanhar-pedido/acompanhar-pedido.html',
        controller: 'AcompanharPedidoCtrl',
	    })
      //Rota para a página Finalizar Pedido
	    .state('cardapio', {
	      url: '/cardapio',
	      templateUrl: 'app/components/client/cardapio/cardapio.html',
        controller: 'CardapioCtrl',
	    })
	    //Rota para a página Finalizar Pedido
	    .state('finalizar-pedido', {
	      url: '/finalizar-pedido',
	      templateUrl: 'app/components/client/finalizar-pedido/finalizar-pedido.html',
	    })
	    //Rota para a página Cozinha
	    .state('kitchen', {
	      url: '/kitchen',
	      templateUrl: 'app/components/kitchen/index.html',
	    })
	    //Rota para a página Edição de Reserva
	    .state('edicao-reserva', {
	      url: '/edicao-reserva',
	      templateUrl: 'app/components/manager/edicao-reserva/edicao-reserva.html',
	    })
	    //Rota para a página Gerador de Tokens
	    .state('gerador-token', {
	      url: '/gerador-token',
	      templateUrl: 'app/components/manager/gerador-token/gerador-token.html',
	    })
	    //Rota para a página Gestão de Mesas
	    .state('gestao-mesas', {
	      url: '/gestao-mesas',
	      templateUrl: 'app/components/manager/gestao-mesas/gestao-mesas.html',
	    })
	    //Rota para a página Status: Mesa Livre
	    .state('status-mesa-livre', {
	      url: '/status-mesa-livre',
	      templateUrl: 'app/components/manager/status-mesa-livre/status-mesa-livre.html',
	    })
	    //Rota para a página Status: Mesa Ocupada
	    .state('status-mesa-ocupada', {
	      url: '/status-mesa-ocupada',
	      templateUrl: 'app/components/manager/status-mesa-ocupada/status-mesa-ocupada.html',
	    })
	    //Rota para a página Status: Mesa Reservada
	    .state('status-mesa-reservada', {
	      url: '/status-mesa-reservada',
	      templateUrl: 'app/components/manager/status-mesa-reservada/status-mesa-reservada.html',
	    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});
