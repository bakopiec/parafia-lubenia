angular
  .module('parafiaLubenia')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'homeCtrl',
        templateUrl: 'core/home/home.tpl.html'
      })
      .otherwise({
          redirectTo: '/'
      });
  
    $locationProvider.html5Mode(true);
  });