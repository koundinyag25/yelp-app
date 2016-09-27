angular.module('myApp',['ui.router','myApp.services','ngMaterial','leaflet-directive'])
.config(function($stateProvider,$urlRouterProvider,$locationProvider){

        $stateProvider
        .state('home',{
          url:'/',
          templateUrl: 'views/home1.html',
          controller: 'HomeCtrl'
        });

        $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
              });
});
angular.element(document).ready(function() {
     angular.bootstrap(document, ['myApp']);
   });
