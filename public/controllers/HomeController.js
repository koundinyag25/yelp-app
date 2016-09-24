
  angular.module('myApp').controller("HomeCtrl", ['$scope','$http','$rootScope','myAppServices',function($scope,$http,$rootScope,myAppServices){
        $scope.business = [];
      $scope.search = function(){
        myAppServices.search($scope.search.keyword,$scope.search.location).then(function(data){
            $scope.business = data.data.businesses;
            $scope.search.keyword ='';
            $scope.search.location = '';
            console.log($scope.business[0]);
        }).catch(function(error){
          return error;
        })
      }



  }]);
