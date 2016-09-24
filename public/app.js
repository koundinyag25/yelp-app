angular.module('myApp',['ui.router','myApp.services'])
.config(function($stateProvider,$urlRouterProvider,$locationProvider){

        $stateProvider
        .state('home',{
          url:'/',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl',
          controllerAs: "$ctrl"
        });

        $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
              });
});
angular.element(document).ready(function() {
     angular.bootstrap(document, ['myApp']);
   });
