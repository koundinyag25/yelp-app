var myApp = angular.module('myApp',['ui.router']);



myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home',{
          url:'/',
          templateUrl: 'views/home.html',
          controller: 'HomeController'
        });
}]);


myApp.controller("HomeController", ['$scope','$http','$rootScope',function($scope,$http,$rootScope){
      $rootScope.business = [];

      $scope.search = function(q){
        var keyword = $scope.search.keyword;
        var location = $scope.search.location;
        $http.get('/business', { params :{ term: keyword ,location: location }}).then(function(data){
          console.log(data.data.businesses);
          $rootScope.business = data.data.businesses;
          console.log($rootScope.business);
        }).catch(function(error){
          return error;
        });
      }

      $scope.getreviews= function(){
        
      }

}]);
