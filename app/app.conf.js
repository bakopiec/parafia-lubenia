angular
  .module('parafiaLubenia')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'homeCtrl',
        templateUrl: 'core/home/home.tpl.html'
      })
      .when('/intentions', {
        controller: 'intentionCtrl',
        templateUrl: 'core/intention/intention.tpl.html'
      })
      .when('/news', {
        controller: 'newsCtrl',
        templateUrl: 'core/news/news.tpl.html'
      }) 
      .when('/preachs', {
        controller: 'preachsCtrl',
        templateUrl: 'core/preachs/preachs.tpl.html'
      }) 
      .when('/history', {
        controller: 'historyCtrl',
        templateUrl: 'core/history/history.tpl.html'
      }) 
      .when('/contact', {
        controller: 'contactCtrl',
        templateUrl: 'core/contact/contact.tpl.html'
      }) 
      .otherwise({
          redirectTo: '/'
      });
  
    $locationProvider.html5Mode(true);
  });