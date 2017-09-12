angular.module("leMaitre", ["ui.router"]).config(function($locationProvider, $urlRouterProvider, $stateProvider){
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'app/components/shared/login.html',
    });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});
