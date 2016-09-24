angular.module('myApp',['ui.router','myApp.services'])
.config(function($stateProvider,$urlRouterProvider){
        $stateProvider
        .state('home',{
          url:'/',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl',
          controllerAs: "$ctrl"
        });
});
angular.element(document).ready(function() {
     angular.bootstrap(document, ['myApp']);
   });
